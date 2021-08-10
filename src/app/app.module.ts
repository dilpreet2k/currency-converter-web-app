import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SiteNavBarComponent } from './layout/site-nav-bar/site-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [	
    AppComponent,
    SiteNavBarComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
