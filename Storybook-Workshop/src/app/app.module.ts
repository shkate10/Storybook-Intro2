import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ParentWrapperComponent } from './components/parent-wrapper/parent-wrapper.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ParentWrapperComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
