import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private readonly BASE_URL : string = environment.BASE_URL
  private readonly POSTS_URL : string = `${this.BASE_URL}/posts.json`
  private _httpClient = inject(HttpClient)

  postSignal = signal<Ipost[]>([])
  selectedPostSignal = signal<Ipost | null>(null)
  isLoadingSignal = signal<boolean>(false)

  fetchposts(): Observable<Ipost[]>{
    this.isLoadingSignal.set(true)
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
        this.isLoadingSignal.set(false)
      }),
      catchError(err => {
        this.isLoadingSignal.set(false)
        return throwError(() => err)
      })
    )
  }

  fetchPostById(id : string) : Observable<Ipost>{
    this.isLoadingSignal.set(true)
    let POST_URL : string = `${this.BASE_URL}/posts/${id}.json`
    return this._httpClient.get<Ipost>(POST_URL).pipe(
      tap(res =>{
        this.selectedPostSignal.set(res)
        this.isLoadingSignal.set(false)
      }),
      catchError(err =>{
        this.isLoadingSignal.set(false)
        return throwError(() => err)
      })
    )
  }
}
