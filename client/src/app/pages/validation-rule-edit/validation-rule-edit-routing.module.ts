import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationRuleEditComponent } from './validation-rule-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationRuleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRuleEditRoutingModule { }
