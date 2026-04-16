import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MATERIAL_IMPORTS } from './shared/const/material';
import { Posts } from './shared/services/posts';

@Component({
  selector: 'app-root',
  imports: [...MATERIAL_IMPORTS, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('postCRUD');

  private _postService = inject(Posts)

  ngOnInit(): void {
    
  }

  get isLoading() {
    return this._postService.isLoadingSignal()
  }
}
