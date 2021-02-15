import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo';
import { Album } from '../album'; 
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  photos: Photo[] = [];
  albums : Album[] = [];
  albumPhotos : Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAlbums();
    this.getPhotosFromAlbum(1);
  }

  getPhotos(): void {
    this.photoService.getPhotos()
      .subscribe(photos => this.photos = photos.slice(1, 5));
  }

  getAlbums(): void {
    this.photoService.getAlbums()
      .subscribe(albums => this.albums = albums.slice(1, 5));
  }

  getPhotosFromAlbum(id:number): void {
    this.photoService.getPhotosFromAlbum(id)
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos);
  }
}