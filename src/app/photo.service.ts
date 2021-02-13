import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Photo } from './photo';
import { PHOTOS } from './mock-photos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private messageService: MessageService) { }

  getPhotos(): Observable<Photo[]> {
    const photos = of(PHOTOS);
    this.messageService.add('PhotoService: fetched photos');
    return photos;
  }

  getPhoto(id: number): Observable<Photo | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched photo id=${id}`);
    return of(PHOTOS.find(photo => photo.id === id));
  }
}
