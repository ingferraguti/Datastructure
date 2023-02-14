import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTypeEditComponent } from './data-type-edit.component';
import { DataTypeEditRoutingModule } from './data-type-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DataTypeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DataTypeEditComponent
  ]
})
export class DataTypeEditModule { }
