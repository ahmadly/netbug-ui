import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkHomeComponent } from './network-home/network-home.component';


@NgModule({
  declarations: [NetworkHomeComponent],
  imports: [
    CommonModule,
    NetworkRoutingModule
  ]
})
export class NetworkModule { }
