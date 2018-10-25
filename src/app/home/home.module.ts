import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ],
  declarations: [
    SigninComponent, 
    SignoutComponent
  ]
})
export class HomeModule { }