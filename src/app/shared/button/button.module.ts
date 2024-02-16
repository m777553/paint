import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonModule as PrimeBtn } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    PrimeBtn,
    TooltipModule,
  ],
  exports: [
    ButtonComponent,
  ],
})
export class ButtonModule { }
