import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DataTypeService } from '../../services/data-type.service';
// Import Models
import { DataType } from '../../domain/datastructure_db/data-type';

// START - USED SERVICES
/**
* DataTypeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* DataTypeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of DataType
 * @class DataTypeListComponent
 */
@Component({
    selector: 'app-data-type-list',
    templateUrl: './data-type-list.component.html',
    styleUrls: ['./data-type-list.component.css']
})
export class DataTypeListComponent implements OnInit {
    list: DataType[];
    search: any = {};
    idSelected: string;
    constructor(
        private datatypeService: DataTypeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.datatypeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select DataType to remove
     *
     * @param {string} id Id of the DataType to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected DataType
     */
    deleteItem() {
        this.datatypeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
