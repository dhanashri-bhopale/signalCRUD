import { Component, Input } from '@angular/core';
import { Ipost } from '../../models/post';
import { MATERIAL_IMPORTS } from '../../const/material';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post-card',
  imports: [...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
   @Input() postobj !: Ipost
}
