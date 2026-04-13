import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private readonly BASE_URL : string = environment.BASE_URL
  private readonly POSTS_URL : string = `${this.BASE_URL}/posts.json`
  private _httpClient = inject(HttpClient)

  postSignal = signal<Ipost[]>([])

  fetchposts(): Observable<Ipost[]>{
    return this._httpClient.get(this.POSTS_URL).pipe(
      map((res : any) => {
        let postArr : Array<Ipost> = []

        for (const key in res) {
         postArr.push({...res[key], id : key})
        }
        return postArr
      }),
      tap(posts => {
        this.postSignal.set(posts)
      })
    )
  }
}
