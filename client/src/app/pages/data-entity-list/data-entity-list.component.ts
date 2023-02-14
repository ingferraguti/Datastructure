import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DataEntityService } from '../../services/data-entity.service';
// Import Models
import { DataEntity } from '../../domain/datastructure_db/data-entity';

// START - USED SERVICES
/**
* DataEntityService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* DataEntityService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of DataEntity
 * @class DataEntityListComponent
 */
@Component({
    selector: 'app-data-entity-list',
    templateUrl: './data-entity-list.component.html',
    styleUrls: ['./data-entity-list.component.css']
})
export class DataEntityListComponent implements OnInit {
    list: DataEntity[];
    search: any = {};
    idSelected: string;
    constructor(
        private dataentityService: DataEntityService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.dataentityService.list().subscribe(list => this.list = list);
    }

    /**
     * Select DataEntity to remove
     *
     * @param {string} id Id of the DataEntity to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected DataEntity
     */
    deleteItem() {
        this.dataentityService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
