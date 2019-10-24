import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { ProfileRouteActivator } from './profile-route.activator.service';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivator] },
    { path: 'login', component: LoginComponent }
]