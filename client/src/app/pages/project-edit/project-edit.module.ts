import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEditComponent } from './project-edit.component';
import { ProjectEditRoutingModule } from './project-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectEditComponent
  ]
})
export class ProjectEditModule { }
