import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../const/material';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
})
export class PostForm implements OnInit{

  postForm !: FormGroup

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, Validators.required),
      content : new FormControl(null, Validators.required),
      postId : new FormControl(5)
    })
  }

  get f(){
    return this.postForm.controls
  }
}
