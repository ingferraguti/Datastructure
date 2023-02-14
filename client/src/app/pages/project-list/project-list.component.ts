import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProjectService } from '../../services/project.service';
// Import Models
import { Project } from '../../domain/datastructure_db/project';

// START - USED SERVICES
/**
* ProjectService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProjectService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Project
 * @class ProjectListComponent
 */
@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    list: Project[];
    search: any = {};
    idSelected: string;
    constructor(
        private projectService: ProjectService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.projectService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Project to remove
     *
     * @param {string} id Id of the Project to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Project
     */
    deleteItem() {
        this.projectService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
