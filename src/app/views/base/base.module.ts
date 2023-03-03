import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsModule } from '@coreui/angular-chartjs';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views
import { AccordionsComponent } from './accordion/accordions.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
    ChartjsModule ,
  ],
  declarations: [
    AccordionsComponent,
    BreadcrumbsComponent,
    CardsComponent,
  
  ],
})
export class BaseModule {}
