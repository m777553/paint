import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "./toolbar.component";
import { ButtonModule } from '../../shared/button/button.module';



@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  exports: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
})
export class ToolbarModule { }
