import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RandomRoutingModule} from './random-routing.module';
import {MD5Component} from './md5/md5.component';
import {RandomHomeComponent} from './random-home/random-home.component';


@NgModule({
  declarations: [MD5Component, RandomHomeComponent],
  imports: [
    CommonModule,
    RandomRoutingModule
  ]
})
export class RandomModule {
}
