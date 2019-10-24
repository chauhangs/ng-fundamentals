import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileRouteActivator implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }
    
    canActivate(route: ActivatedRouteSnapshot) {
        console.log("in ProfileRouteActivator")
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/events'])
        }
        return true;

    }
}