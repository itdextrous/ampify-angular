import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute, 
      private router: Router,  
      private userService: UserService) 
      { 
        // redirect to home if already logged in
        // if (this.userService.userValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
         if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.signIn(this.f.username.value, this.f.password.value)
            .then(data => { this.router.navigate(['campify']);}, error => {
                    this.error = error;
                    this.loading = false;
                });
    }
    onSignUp(){
        this.userService.signUp(this.f.username.value, this.f.password.value,"test@yopmail.com")
        .then(data => {   }, error => {
                this.error = error;
                this.loading = false;
            });
    }
}