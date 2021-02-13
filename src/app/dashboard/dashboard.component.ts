import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos()
      .subscribe(photos => this.photos = photos.slice(1, 5));
  }
}