import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RandomRoutingModule} from './random-routing.module';
import {PasswordComponent} from './password/password.component';
import {RandomHomeComponent} from './random-home/random-home.component';


@NgModule({
  declarations: [PasswordComponent, RandomHomeComponent],
  imports: [
    CommonModule,
    RandomRoutingModule
  ],
  exports: [
    PasswordComponent,
    RandomHomeComponent
  ],
})
export class RandomModule {
}
