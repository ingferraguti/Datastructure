/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE data-objectBaseService PLEASE EDIT ../data-object.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { DataObject } from '../../domain/datastructure_db/data-object';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../DataObject.service.ts
 */

/*
 * SCHEMA DB DataObject
 *
	{
		Description: {
			type: 'String'
		},
		Name: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		DataEntity: [{
			type: Schema.ObjectId,
			ref : "DataObject"
		}],
	}
 *
 */
@Injectable()
export class DataObjectBaseService {

    contextUrl: string = environment.endpoint + '/dataobject';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * DataObjectService.findByDataEntity
    *   @description CRUD ACTION findByDataEntity
    *   @param Objectid key Id of model to search for
    *
    */
    findByDataEntity(id: string): Observable<DataObject[]> {
        return this.http
            .get<DataObject[]>(this.contextUrl + '/findByDataEntity/' + id)
            .pipe(
                map(response => response)
            );
    }


    // Custom APIs

}
