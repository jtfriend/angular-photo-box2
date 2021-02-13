import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PhotoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }