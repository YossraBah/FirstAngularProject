import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}
  titre = 'Application de gestion de devoirs à rendre Assagnments';
  login() {
    if (!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.loggedOut();
    }
    this.router.navigate(['']);
  }
}
