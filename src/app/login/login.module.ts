import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginCompComponent } from './login-comp/login-comp.component';

@NgModule({
  declarations: [LoginCompComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginCompComponent
  ]
})
export class LoginModule { }
