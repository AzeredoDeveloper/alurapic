import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.service.autenticate(userName, password).subscribe(
      retorno => {
        console.log("Autenticado:" + retorno);

      },
      error => {
        this.loginForm.reset();
        console.log(error.status);
      }
    );
  }

}
