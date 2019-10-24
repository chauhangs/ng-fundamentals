import { TOASTR_TOKEN } from './../common/toastr.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em {float: right; color:red; padding-left :10px}
      .error input {background-color: #E3C3C5;}
      .error ::-webkit-input-placeholder {color:#999;}
      .error ::-moz-placeholder {color:#999;} 
      .error :-moz-placeholder {color:#999;} 
      .error ::-mz-input-placeholder {color:#999;} 
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private route: Router, private auth: AuthService, @Inject(TOASTR_TOKEN) private toastr:any) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  save(profileForm: any) {
    this.auth.currentUser.firstName = profileForm.firstName;
    this.auth.currentUser.lastName = profileForm.lastName;
    this.toastr.success("Profile Saved !")
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  cancel() {
    this.route.navigate(['/events']);
  }

}