import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to the app!</h1>`,  // Simple inline template for testing
})
export class AppComponent { }

/*import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to update the current URL
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  setCurrentUrl(url: string) {
    this.currentUrl = url;
  }
}
*/