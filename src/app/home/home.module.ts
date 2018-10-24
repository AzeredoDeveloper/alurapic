import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [
    SigninComponent, 
    SignoutComponent
  ]
})
export class HomeModule { }