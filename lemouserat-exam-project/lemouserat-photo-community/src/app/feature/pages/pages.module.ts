import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from '../shared/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent

    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
