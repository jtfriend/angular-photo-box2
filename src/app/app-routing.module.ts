import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/1/photos', pathMatch: 'full' },
  { path: 'detail/:id', component: PhotoDetailComponent },
  { path: 'dashboard/:id/photos', component: DashboardComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }