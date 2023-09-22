import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
