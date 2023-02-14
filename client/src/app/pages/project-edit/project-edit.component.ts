// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProjectService } from '../../services/project.service';
import { SchemaService } from '../../services/schema.service';
// Import Models
import { Project } from '../../domain/datastructure_db/project';
import { User } from '../../domain/datastructure_db/user';
import { Schema } from '../../domain/datastructure_db/schema';

// START - USED SERVICES
/**
* ProjectService.create
*	@description CRUD ACTION create
*
* ProjectService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProjectService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SchemaService.findByProject
*	@description CRUD ACTION findByProject
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Project
 */
@Component({
    selector: 'app-project-edit',
    templateUrl: 'project-edit.component.html',
    styleUrls: ['project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    item: Project;
    listUsers: User[];
    externalUser_Creator: User[];
    externalSchema_Project: Schema[];
    model: Project;
    formValid: Boolean;

    constructor(
    private projectService: ProjectService,
    private schemaService: SchemaService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Project();
        this.externalUser_Creator = [];
        this.externalSchema_Project = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.projectService.get(id).subscribe(item => this.item = item);
                this.userService.findByCreator(id).subscribe(list => this.externalUser_Creator = list);
                this.schemaService.findByProject(id).subscribe(list => this.externalSchema_Project = list);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listUsers = list);
        });
    }

    /**
     * Check if an User is in  Users
     *
     * @param {string} id Id of User to search
     * @returns {boolean} True if it is found
     */
    containUser(id: string): boolean {
        if (!this.item.Users) return false;
        return this.item.Users.indexOf(id) !== -1;
    }

    /**
     * Add User from Project
     *
     * @param {string} id Id of User to add in this.item.Users array
     */
    addUser(id: string) {
        if (!this.item.Users)
            this.item.Users = [];
        this.item.Users.push(id);
    }

    /**
     * Remove an User from a Project
     *
     * @param {number} index Index of User in this.item.Users array
     */
    removeUser(index: number) {
        this.item.Users.splice(index, 1);
    }

    /**
     * Save Project
     *
     * @param {boolean} formValid Form validity check
     * @param Project item Project to save
     */
    save(formValid: boolean, item: Project): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.projectService.update(item).subscribe(data => this.goBack());
            } else {
                this.projectService.create(item).subscribe(data => this.goBack());
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



