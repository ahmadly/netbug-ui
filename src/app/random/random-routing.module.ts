import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MD5Component} from './md5/md5.component';
import {RandomHomeComponent} from './random-home/random-home.component';

const routes: Routes = [
  {path: '', component: RandomHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomRoutingModule {
}
