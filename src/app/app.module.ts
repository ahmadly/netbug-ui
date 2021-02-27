import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RandomModule} from './random/random.module';
import {NetworkModule} from './network/network.module';
import {MailModule} from './mail/mail.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RandomModule,
    NetworkModule,
    MailModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
