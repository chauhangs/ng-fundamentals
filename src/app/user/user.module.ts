import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { userRoutes } from './user.routes';
import { ProfileComponent} from './profile.component'
import { ProfileRouteActivator } from './profile-route.activator.service';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [ProfileRouteActivator],
})
export class UserModule { }
