import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntityListComponent } from './data-entity-list.component';
import { DataEntityListRoutingModule } from './data-entity-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DataEntityListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DataEntityListComponent
  ]
})
export class DataEntityListModule { }
