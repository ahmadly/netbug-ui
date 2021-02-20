import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RandomRoutingModule} from './random-routing.module';
import {RandomHomeComponent} from './random-home/random-home.component';
import {MD5Component} from './md5/md5.component';
import {FIPSComponent} from './fips/fips.component';
import { Base64Component } from './base64/base64.component';


@NgModule({
  declarations: [RandomHomeComponent, MD5Component, FIPSComponent, Base64Component],
  imports: [
    CommonModule,
    RandomRoutingModule
  ],
  exports: [
    RandomHomeComponent, MD5Component, FIPSComponent
  ],
})
export class RandomModule {
}
