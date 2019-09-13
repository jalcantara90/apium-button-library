import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ButtonComponent } from './button/button.component';
import { AaButtonModule } from './aa-button/aa-button.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    ButtonComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AaButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
