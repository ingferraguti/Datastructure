// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DataTypeService } from '../../services/data-type.service';
import { DataEntityService } from '../../services/data-entity.service';
// Import Models
import { DataType } from '../../domain/datastructure_db/data-type';
import { DataEntity } from '../../domain/datastructure_db/data-entity';

// START - USED SERVICES
/**
* DataTypeService.create
*	@description CRUD ACTION create
*
* DataTypeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* DataTypeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* DataEntityService.findByDataType
*	@description CRUD ACTION findByDataType
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a DataType
 */
@Component({
    selector: 'app-data-type-edit',
    templateUrl: 'data-type-edit.component.html',
    styleUrls: ['data-type-edit.component.css']
})
export class DataTypeEditComponent implements OnInit {
    item: DataType;
    externalDataEntity_DataType: DataEntity[];
    model: DataType;
    formValid: Boolean;

    constructor(
    private datatypeService: DataTypeService,
    private dataentityService: DataEntityService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new DataType();
        this.externalDataEntity_DataType = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.datatypeService.get(id).subscribe(item => this.item = item);
                this.dataentityService.findByDataType(id).subscribe(list => this.externalDataEntity_DataType = list);
            }
            // Get relations
        });
    }


    /**
     * Save DataType
     *
     * @param {boolean} formValid Form validity check
     * @param DataType item DataType to save
     */
    save(formValid: boolean, item: DataType): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.datatypeService.update(item).subscribe(data => this.goBack());
            } else {
                this.datatypeService.create(item).subscribe(data => this.goBack());
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



