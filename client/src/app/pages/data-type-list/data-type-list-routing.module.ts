import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTypeListComponent } from './data-type-list.component';

const routes: Routes = [
  {
    path: '',
    component: DataTypeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTypeListRoutingModule { }
