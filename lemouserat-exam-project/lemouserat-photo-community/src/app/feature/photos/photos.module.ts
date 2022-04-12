import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosNewPhotoComponent } from './photos-new-photo/photos-new-photo.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';



@NgModule({
  declarations: [
    PhotosPageComponent,
    PhotosListComponent,
    PhotosNewPhotoComponent,
    PhotoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
