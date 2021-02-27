import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'random', loadChildren: () => import('./random/random.module').then(m => m.RandomModule)},
  {path: 'network', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule)},
  {path: 'mail', loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
