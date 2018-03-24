import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Bookmark } from './models/bookmark.interface'
import { Observable } from 'rxjs/Observable'
import { map, catchError } from 'rxjs/operators'
import 'rxjs/add/observable/throw'

const BOOKMARKS_API = "http://localhost:3000/bookmarks"

@Injectable()
export class BookmarkDashboardService {
    headers: HttpHeaders
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getBookmarks(): Observable<Bookmark[]> {
        return this.http
            .get(BOOKMARKS_API, {headers: this.headers})
            .pipe(map((response: HttpResponse<any>) => response),
            catchError((error: any) => this.handleError(error))
            )

    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error['error'] || "backend server error");
        }
        return Observable.throw(error || "backend server error");
    }

    getBookmark(id: number): Observable<Bookmark> {
        return this.http
          .get(`${BOOKMARKS_API}/${id}`, {headers: this.headers}) //concatenare
          .pipe(
          map((response: HttpResponse<any>) => response),
          catchError((error: any) => this.handleError(error))
          );
    
      }
    
      addBookmark(bookmark: Bookmark): Observable<Bookmark> {
        return this.http
          .post(`${BOOKMARKS_API}`, bookmark, {headers: this.headers})
          .pipe(
          map((response: HttpResponse<any>) => { response; console.log('response', response) }),
          catchError((error: any) => this.handleError(error))
          )
      }
    
      updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
        return this.http
          .put(`${BOOKMARKS_API}/${bookmark.id}`, bookmark, {headers: this.headers})
          .pipe(
          map((response: HttpResponse<any>) => response),
          catchError((error: any) => this.handleError(error))
          )
      }
    
      removeBookmark(bookmark: Bookmark): Observable<Bookmark> {
        return this.http
          .delete(`${BOOKMARKS_API}/${bookmark.id}`, {headers: this.headers})
          .pipe(
          map((response: HttpResponse<any>) => response),
          catchError((error: any) => this.handleError(error))
          )
      }

}
