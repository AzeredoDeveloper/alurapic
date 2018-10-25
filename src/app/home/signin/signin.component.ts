import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService, private router: Router) { }

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
        this.router.navigate(['user', userName]);

      },
      error => {
        this.loginForm.reset();
       alert('Usuário e/ou senha inválido(s).');
      }
    );
  }

}
