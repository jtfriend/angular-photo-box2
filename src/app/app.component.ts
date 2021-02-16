import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from './photo.service'
import { Photo} from './photo';
import { Album } from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Box';

  albums : Album[] = [];
  albumPhotos : Photo[] = [];

  constructor(
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
  }

  reloadPage() {
    window.location.href = "/dashboard/1/photos"; 
  }

  getAlbums(): void {
    this.photoService.getAlbums()
      .subscribe(albums => this.albums = albums.slice(0, 4));
  }

  getPhotosFromAlbum(id:number): void {
    this.photoService.getPhotosFromAlbum(id)
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos);
  }
}
