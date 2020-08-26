import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(user) {
    // authenticate the user
    console.log(user);
    const token = this.authService.authenticate(user);

    if (token) {
      this.authService.storeToken(token);
      this.router.navigate(['/movie-list']);
    } else {
      console.log('Not Authenticated');
      this.router.navigate(['/login']);
    }
  }

}

