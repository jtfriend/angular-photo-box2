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
  dashAlbums : Album[] = [];
  albumPhotos : Photo[] = [];
  totalAlbumsValue = 0;
  i=0;
  j=4;
  startOfNextSet = 0;
  endOfNextSet = 0;

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
      .subscribe(
        photos => this.photos = photos.slice(0, 4)
      );
  }

  getAlbums(): void {
    this.photoService.getAlbums()
      .subscribe(albums => {
        this.albums = albums.slice(0,4);
        this.totalAlbumsValue = albums.length;
      });
  }

  getPreviousAlbums(): void {
    if(!(this.i-4 < 0)) {
      this.startOfNextSet = this.i-4;
      this.endOfNextSet = this.j-4;
      this.photoService.getAlbums()
      .subscribe(albums => this.albums = albums.slice(this.startOfNextSet, this.endOfNextSet));
      this.i = this.startOfNextSet;
      this.j = this.endOfNextSet;
    }
  }

  getNextAlbums(): void {
    if (!(this.i > (this.totalAlbumsValue-4-1))) {
      this.startOfNextSet = this.i+4;
      this.endOfNextSet = this.j+4;
      this.photoService.getAlbums()
      .subscribe(albums => this.albums = albums.slice(this.startOfNextSet, this.endOfNextSet));
      this.i = this.startOfNextSet;
      this.j = this.endOfNextSet;
    }
  }

  getPhotosFromAlbum(id:number): void {
    this.photoService.getPhotosFromAlbum(id)
      .subscribe(albumPhotos => this.albumPhotos = albumPhotos);
  }
}