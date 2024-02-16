import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';
import { ToolbarModule } from '../toolbar/toolbar.module';



@NgModule({
  declarations: [
    CanvasComponent,
  ],
  exports: [
    CanvasComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
  ],
})
export class CanvasModule { }
