import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { GridstackModule } from 'gridstack/dist/angular';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    SharedModule,
    GridstackModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
