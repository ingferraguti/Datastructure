import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { ProjectListRoutingModule } from './project-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
