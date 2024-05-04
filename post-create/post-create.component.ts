import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  @Output() newPost = new EventEmitter();
  

  enteredTitle: string | undefined;
  enteredContent: string | undefined;
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  errorMessages = {
    required: 'field is required',
  }
  onSavePost() {

    if (this.postForm.valid) {
      this.newPost.emit(this.postForm.value);
      this.postForm.patchValue({
        title: '',
        content: '',
      });
      
    }

  }

 
}
