import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTypeEditComponent } from './data-type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DataTypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTypeEditRoutingModule { }
