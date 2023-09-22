import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userData$ = new BehaviorSubject(<any>[]);
  // userDataArr:any[] = [];
  constructor() { }
  // saveUserData(data:any){
  //   this.userDataArr.push(data);
  // }
}
