import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NetworkHomeComponent} from './network-home/network-home.component';

const routes: Routes = [
  {path: '', component: NetworkHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule {
}
