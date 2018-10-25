import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/auth/plataform/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder, private service: AuthService, private router: Router, private platformDetectorService: PlataformDetectorService) { }

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
      () => {
        this.router.navigate(['user', userName]);

      },
      error => {
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
       alert('Usuário e/ou senha inválido(s).');
      }
    );
  }

}
