import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationRuleListComponent } from './validation-rule-list.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationRuleListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRuleListRoutingModule { }
