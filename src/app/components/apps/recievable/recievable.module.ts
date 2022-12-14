import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import { recievableComponent } from './recievable.component'
import { recievableRoutingModule } from './recievable-routing.module'
import {NgApexchartsModule } from 'ng-apexcharts'
@NgModule({
  declarations: [recievableComponent],
  imports: [
    CommonModule,
    recievableRoutingModule,
    NgxDropzoneModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule,
    NgxDatatableModule,
    NgxPaginationModule
  ],
})
export class recievableModule { }
