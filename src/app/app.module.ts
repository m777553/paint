import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScaffoldingsModule} from "./components/scaffoldings/scaffoldings.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScaffoldingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
