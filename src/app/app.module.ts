import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightsDirective } from './highlights.directive';
import { HighllightDirective } from './highllight.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightsDirective,
    HighllightDirective,
    CarouselDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
