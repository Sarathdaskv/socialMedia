import { Injectable } from '@angular/core';
import { Post } from './interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  addPosts(recievedTitle: string, recievedContent: string) {
    const recievedPost: Post = { title: recievedTitle, content: recievedContent };
    this.posts.push(recievedPost);
  }
}
