import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRuleListComponent } from './validation-rule-list.component';
import { ValidationRuleListRoutingModule } from './validation-rule-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ValidationRuleListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ValidationRuleListComponent
  ]
})
export class ValidationRuleListModule { }
