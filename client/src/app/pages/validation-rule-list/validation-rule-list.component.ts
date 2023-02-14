import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ValidationRuleService } from '../../services/validation-rule.service';
// Import Models
import { ValidationRule } from '../../domain/datastructure_db/validation-rule';

// START - USED SERVICES
/**
* ValidationRuleService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ValidationRuleService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ValidationRule
 * @class ValidationRuleListComponent
 */
@Component({
    selector: 'app-validation-rule-list',
    templateUrl: './validation-rule-list.component.html',
    styleUrls: ['./validation-rule-list.component.css']
})
export class ValidationRuleListComponent implements OnInit {
    list: ValidationRule[];
    search: any = {};
    idSelected: string;
    constructor(
        private validationruleService: ValidationRuleService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.validationruleService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ValidationRule to remove
     *
     * @param {string} id Id of the ValidationRule to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ValidationRule
     */
    deleteItem() {
        this.validationruleService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
