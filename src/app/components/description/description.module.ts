import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description.component';
import { ButtonModule } from '../../shared/button/button.module';



@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    DescriptionComponent
  ]
})
export class DescriptionModule { }
