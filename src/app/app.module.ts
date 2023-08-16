import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { WelcomeRoutingModule } from './pages/welcome/welcome-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthModule } from './auth/auth.module';
registerLocaleData(hi);

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [	
     AppComponent,
   
    WelcomeComponent,

   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    WelcomeModule,
    WelcomeRoutingModule,
    AuthModule
  ],
  exports: [
    NzMenuModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: hi_IN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
