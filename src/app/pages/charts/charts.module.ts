import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';
import { BubbleComponent } from './bubble/bubble.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bar', pathMatch: 'full'},
  { path: 'bar', component: BarComponent, data: { breadcrumb: 'Bar Charts' } },
  { path: 'pie', component: PieComponent, data: { breadcrumb: 'Pie Charts' } },
  { path: 'line', component: LineComponent, data: { breadcrumb: 'Line Charts' } },
  { path: 'bubble', component: BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BarComponent,
    PieComponent,
    LineComponent,
    BubbleComponent
  ]
})
export class ChartsModule { }
