import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {
  }
  public async isAuthenticated(): Promise<boolean> {
   return await Auth.currentAuthenticatedUser().then(() => { return true; })
      .catch(() => { return false });
  }


}