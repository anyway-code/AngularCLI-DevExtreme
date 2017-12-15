import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxTextBoxModule, DxSwitchModule, DxLookupModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSwitchModule,
    DxLookupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
