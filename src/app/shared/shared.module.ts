import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {MaterialModule} from './material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule
  ],
  exports: [MaterialModule]
})
export class SharedModule {
}
