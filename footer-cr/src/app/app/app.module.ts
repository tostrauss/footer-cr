import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.compoent';

@NgModule({
  declarations: [
    AppComponent  // Declare the AppComponent
  ],
  imports: [
    BrowserModule  // Import BrowserModule instead of CommonModule for browser apps
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the application with AppComponent
})
export class AppModule { }
