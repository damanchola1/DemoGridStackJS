import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { GridstackModule } from 'gridstack/dist/angular';



@NgModule({
  declarations: [
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    SharedModule,
    GridstackModule
  ]
})
export class DashboardModule { }
