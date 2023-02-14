// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DataEntityService } from '../../services/data-entity.service';
import { DataTypeService } from '../../services/data-type.service';
import { ValidationRuleService } from '../../services/validation-rule.service';
import { DataObjectService } from '../../services/data-object.service';
// Import Models
import { DataEntity } from '../../domain/datastructure_db/data-entity';
import { DataObject } from '../../domain/datastructure_db/data-object';
import { DataType } from '../../domain/datastructure_db/data-type';
import { ValidationRule } from '../../domain/datastructure_db/validation-rule';

// START - USED SERVICES
/**
* DataEntityService.create
*	@description CRUD ACTION create
*
* DataEntityService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* DataEntityService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* DataTypeService.list
*	@description CRUD ACTION list
*
* ValidationRuleService.list
*	@description CRUD ACTION list
*
* DataObjectService.findByDataEntity
*	@description CRUD ACTION findByDataEntity
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a DataEntity
 */
@Component({
    selector: 'app-data-entity-edit',
    templateUrl: 'data-entity-edit.component.html',
    styleUrls: ['data-entity-edit.component.css']
})
export class DataEntityEditComponent implements OnInit {
    item: DataEntity;
    listDataType: DataType[];
    listValidationRule: ValidationRule[];
    externalDataObject_DataEntity: DataObject[];
    model: DataEntity;
    formValid: Boolean;

    constructor(
    private dataentityService: DataEntityService,
    private datatypeService: DataTypeService,
    private validationruleService: ValidationRuleService,
    private dataobjectService: DataObjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new DataEntity();
        this.externalDataObject_DataEntity = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.dataentityService.get(id).subscribe(item => this.item = item);
                this.dataobjectService.findByDataEntity(id).subscribe(list => this.externalDataObject_DataEntity = list);
            }
            // Get relations
            this.datatypeService.list().subscribe(list => this.listDataType = list);
            this.validationruleService.list().subscribe(list => this.listValidationRule = list);
        });
    }

    /**
     * Check if an ValidationRule is in  ValidationRule
     *
     * @param {string} id Id of ValidationRule to search
     * @returns {boolean} True if it is found
     */
    containValidationRule(id: string): boolean {
        if (!this.item.ValidationRule) return false;
        return this.item.ValidationRule.indexOf(id) !== -1;
    }

    /**
     * Add ValidationRule from DataEntity
     *
     * @param {string} id Id of ValidationRule to add in this.item.ValidationRule array
     */
    addValidationRule(id: string) {
        if (!this.item.ValidationRule)
            this.item.ValidationRule = [];
        this.item.ValidationRule.push(id);
    }

    /**
     * Remove an ValidationRule from a DataEntity
     *
     * @param {number} index Index of ValidationRule in this.item.ValidationRule array
     */
    removeValidationRule(index: number) {
        this.item.ValidationRule.splice(index, 1);
    }

    /**
     * Save DataEntity
     *
     * @param {boolean} formValid Form validity check
     * @param DataEntity item DataEntity to save
     */
    save(formValid: boolean, item: DataEntity): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.dataentityService.update(item).subscribe(data => this.goBack());
            } else {
                this.dataentityService.create(item).subscribe(data => this.goBack());
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



