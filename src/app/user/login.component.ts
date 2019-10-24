import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName: string
    password: string

    constructor(private authService: AuthService, private route:Router) {

    }

    login(formValue: any) {
        this.authService.loginUser(formValue.userName, formValue.password);
        this.route.navigate(['/events']);
      }

      cancel(){
        this.route.navigate(['/events']);
      }

}