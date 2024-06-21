import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from "./modules/core/core.module";
import {EffectsModule} from '@ngrx/effects';
import {RouterOutlet} from "@angular/router";
import {AuthModule} from "./modules/auth/auth.module";
import {authReducer} from "./modules/auth/store/auth.reducer";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {AuthEffects} from "./modules/auth/store/auth.effects";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthHandlingInterceptor} from "./modules/core/interceptors/auth-handling.interceptor";
import {SettlementsModule} from "./modules/settlements/settlements.module";


const customNotifier: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NotifierModule.withConfig(customNotifier),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    SettlementsModule,
    StoreModule.forRoot({auth: authReducer}, {}),
    AppRoutingModule,
    EffectsModule.forRoot([AuthEffects]),
    RouterOutlet,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHandlingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
