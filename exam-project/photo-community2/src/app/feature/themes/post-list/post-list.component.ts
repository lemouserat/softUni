import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../core/interfaces';
import { PostService } from '../../../core/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  now = new Date();

  @Input() photoId: string;

  postList: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadPostList(this.photoId, 5).subscribe(postList => {
      this.postList = postList;
    });
  }

}
