import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazarPageComponent } from './bazar-page/bazar-page.component';
import { BazarListComponent } from './bazar-list/bazar-list.component';
import { BazarItemComponent } from './bazar-item/bazar-item.component';
import { BazarItemDetailsComponent } from './bazar-item-details/bazar-item-details.component';



@NgModule({
  declarations: [
    BazarPageComponent,
    BazarListComponent,
    BazarItemComponent,
    BazarItemDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BazarModule { }
