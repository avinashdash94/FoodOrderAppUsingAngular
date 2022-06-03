import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
//This for star rating install command:  npm install ng-starrating
//URL reference: https://github.com/riteshgandhi/ng-star-rating#readme 

import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component'; 
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
