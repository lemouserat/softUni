import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotosModule } from './feature/photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    PhotosModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    HeaderComponent,
    FooterComponent]
})
export class AppModule { }
