import { Component, inject, OnInit } from '@angular/core';
import { Posts } from '../../services/posts';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../const/material';

@Component({
  selector: 'app-post-details',
  imports: [...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails implements OnInit {

  postId !: string | null

  private _postService = inject(Posts)
  private _routes = inject(ActivatedRoute)
  private _router = inject(Router)

  ngOnInit(): void {
    this.postId = this._routes.snapshot.paramMap.get('id')

    if(this.postId){
      this._postService.fetchPostById(this.postId).subscribe({
        next: data => {
          console.log(data)
        }
      })
    }
  }

  get SelectedPost() {
    return this._postService.selectedPostSignal()
  }
}
