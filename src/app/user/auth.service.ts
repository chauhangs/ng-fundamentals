import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id:1,
            firstName: 'John',
            lastName: 'Papa',
            userName: 'jpapa'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}