import { Auth } from 'aws-amplify';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {
    }
    public async signIn(username, password) {
        try {
            const user = await Auth.signIn(username, password);
            return user;
        } catch (error) {
            console.log('error signing in', error);
        }
    }
    public async signUp(username, password, email) {
        try {
            const { user } = await Auth.signUp({ username, password, attributes: { email } });
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
}
