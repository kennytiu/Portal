import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { PortalSectionComponent } from './portal-section/portal-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalHeaderComponent,
    PortalSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
