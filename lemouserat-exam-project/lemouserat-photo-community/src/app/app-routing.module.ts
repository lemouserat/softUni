import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature/pages/about/about.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { PhotosNewPhotoComponent } from './feature/photos/photos-new-photo/photos-new-photo.component';
import { PhotosPageComponent } from './feature/photos/photos-page/photos-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'home',
    component: HomeComponent
},
{
  path: 'photos',
  component: PhotosPageComponent
},
{
  path: 'add-photo',
  component: PhotosNewPhotoComponent
},
{
  path: 'about',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
