import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTypeListComponent } from './data-type-list.component';
import { DataTypeListRoutingModule } from './data-type-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DataTypeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DataTypeListComponent
  ]
})
export class DataTypeListModule { }
