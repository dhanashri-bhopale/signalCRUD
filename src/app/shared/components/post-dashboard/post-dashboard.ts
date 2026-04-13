import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Posts } from '../../services/posts';
import { JsonPipe } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../const/material';
import { RouterLink } from "@angular/router";
import { PostCard } from "../post-card/post-card";

@Component({
  selector: 'app-post-dashboard',
  imports: [...MATERIAL_IMPORTS, PostCard],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard implements OnInit{
_postService = inject(Posts)

ngOnInit(): void {
  this._postService.fetchposts().subscribe({
    next: data => {
      console.log(data)
    },
    error: err => {
      console.log(err)
    }
  })
}
}
