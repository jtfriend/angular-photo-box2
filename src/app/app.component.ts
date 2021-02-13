import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Photo} from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Box';
  photo!: Photo;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
        this.photo = data;
    })        
  }
}
