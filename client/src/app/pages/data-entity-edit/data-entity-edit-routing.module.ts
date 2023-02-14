import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntityEditComponent } from './data-entity-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DataEntityEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntityEditRoutingModule { }
