import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntityListComponent } from './data-entity-list.component';

const routes: Routes = [
  {
    path: '',
    component: DataEntityListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntityListRoutingModule { }
