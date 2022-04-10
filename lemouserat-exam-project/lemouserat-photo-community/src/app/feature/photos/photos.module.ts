import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';


@NgModule({
  declarations: [
      GalleryComponent,
      PhotoListComponent,
      PhotoItemComponent
  ],
  imports: [
      CommonModule,
      FormsModule,


  ], exports: [

  ]
})
export class PhotosModule { }
