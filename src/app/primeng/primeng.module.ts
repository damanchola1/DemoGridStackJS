import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { ChartModule } from 'primeng/chart';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  exports: [ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    InputTextModule,
    TableModule,
    AccordionModule,
    SplitterModule,
    ChartModule,
    InputSwitchModule
  ]
})
export class PrimengModule { }
