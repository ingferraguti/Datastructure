// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ValidationRuleService } from '../../services/validation-rule.service';
import { DataEntityService } from '../../services/data-entity.service';
// Import Models
import { ValidationRule } from '../../domain/datastructure_db/validation-rule';
import { DataEntity } from '../../domain/datastructure_db/data-entity';

// START - USED SERVICES
/**
* ValidationRuleService.create
*	@description CRUD ACTION create
*
* ValidationRuleService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ValidationRuleService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* DataEntityService.findByValidationRule
*	@description CRUD ACTION findByValidationRule
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ValidationRule
 */
@Component({
    selector: 'app-validation-rule-edit',
    templateUrl: 'validation-rule-edit.component.html',
    styleUrls: ['validation-rule-edit.component.css']
})
export class ValidationRuleEditComponent implements OnInit {
    item: ValidationRule;
    externalDataEntity_ValidationRule: DataEntity[];
    model: ValidationRule;
    formValid: Boolean;

    constructor(
    private validationruleService: ValidationRuleService,
    private dataentityService: DataEntityService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ValidationRule();
        this.externalDataEntity_ValidationRule = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.validationruleService.get(id).subscribe(item => this.item = item);
                this.dataentityService.findByValidationRule(id).subscribe(list => this.externalDataEntity_ValidationRule = list);
            }
            // Get relations
        });
    }


    /**
     * Save ValidationRule
     *
     * @param {boolean} formValid Form validity check
     * @param ValidationRule item ValidationRule to save
     */
    save(formValid: boolean, item: ValidationRule): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.validationruleService.update(item).subscribe(data => this.goBack());
            } else {
                this.validationruleService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



