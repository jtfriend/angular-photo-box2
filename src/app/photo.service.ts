import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Photo } from './photo';
import { Album } from './album';
import { PHOTOS } from './mock-photos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  
  private log(message: string) {
    this.messageService.add(`PhotoService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET photos from the server */
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl)
    .pipe(
      tap(_ => this.log('fetched photos')),
      catchError(this.handleError<Photo[]>('getPhotos', []))
    );
  }

  /** GET photo by id. Will 404 if id not found */
  getPhoto(id: number): Observable<Photo> {
    const url = `${this.photosUrl}/${id}`;
    return this.http.get<Photo>(url).pipe(
      tap(_ => this.log(`fetched photo id=${id}`)),
      catchError(this.handleError<Photo>(`getPhoto id=${id}`))
    );
  }

  /** GET heroes from the server */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl)
    .pipe(
      tap(_ => this.log('fetched albums')),
      catchError(this.handleError<Album[]>('getAlbums', []))
    );
  }

  // getAlbumSize(): Observable<any[]> {
  //   var albums = this.http.get<Album[]>(this.albumsUrl);
  //   return albums.length;
  // }

  /** GET hero by id. Will 404 if id not found */
  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url).pipe(
      tap(_ => this.log(`fetched album id=${id}`)),
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
  }

  getPhotosFromAlbum(id: number): Observable<Photo[]> {
    const url = `${this.albumsUrl}/${id}/photos`;
    return this.http.get<Photo[]>(url).pipe(
      tap(_ => this.log(`fetched album id=${id}/photos`)),
      catchError(this.handleError<Photo[]>(`getAlbum id=${id}/photos`))
    );
  }

}
