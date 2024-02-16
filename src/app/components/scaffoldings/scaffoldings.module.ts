import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaffoldingsComponent } from './scaffoldings.component';
import {TabViewModule} from "primeng/tabview";
import { CanvasModule } from '../canvas/canvas.module';
import { DescriptionModule } from '../description/description.module';



@NgModule({
    declarations: [
        ScaffoldingsComponent
    ],
    exports: [
        ScaffoldingsComponent
    ],
  imports: [
    CommonModule,
    TabViewModule,
    CanvasModule,
    DescriptionModule,
  ],
})
export class ScaffoldingsModule { }
