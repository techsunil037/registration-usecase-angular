import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  users:any[] = [];
  constructor(public registrationService: RegistrationService){

  }

  deleteUser(index:number){
    if (index > -1) { // only splice array when item is found
      this.users.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  ngOnInit(){
    this.registrationService.userData$.subscribe({
      next: (res) => {
        this.users = [...res]
      },
      error: () => {

      },
      complete: () => {
        
      }
    })
  }
}
