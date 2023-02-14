import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRuleEditComponent } from './validation-rule-edit.component';
import { ValidationRuleEditRoutingModule } from './validation-rule-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ValidationRuleEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ValidationRuleEditComponent
  ]
})
export class ValidationRuleEditModule { }
