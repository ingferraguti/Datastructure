import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntityEditComponent } from './data-entity-edit.component';
import { DataEntityEditRoutingModule } from './data-entity-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DataEntityEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DataEntityEditComponent
  ]
})
export class DataEntityEditModule { }
