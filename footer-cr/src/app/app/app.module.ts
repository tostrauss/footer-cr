import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.compoent';
//import { AppComponent } from './app.component';

/*const routes: Routes = [
  { path: 'connect', component: ConnectComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: '/connect', pathMatch: 'full' }, // Default route
];
*/
@NgModule({
  declarations: [
    //AppComponent,
    //ConnectComponent, // Ensure these components are declared
    //GuideComponent,
    //MessagesComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

