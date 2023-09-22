import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userData:any[] = [];
  constructor(private registrationService: RegistrationService){

  }
  addresses: any[] = [
    {
      city: '',
      state: '',
      pincode: ''
    }
  ];

  ngOnInit(){

  }
  deleteAddress(index: number){
    if (index > -1) { // only splice array when item is found
      this.addresses.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  updateAddress(addressItem: string, value:string, index: number){
    this.addresses[index][addressItem] = value;
  }
  signup(form: NgForm){
    form.form.markAllAsTouched();
    if(form.invalid){
      return;
    }
    console.log(this.addresses)
    this.userData.push({
      name: form.value.userName,
      email: form.value.email,
      address: this.addresses
    })
    this.registrationService.userData$.next(this.userData);
    form.resetForm();
  }
  addAddress(){
    this.addresses.push({
      city: '',
      state: '',
      pincode: ''
    })
  }
}
