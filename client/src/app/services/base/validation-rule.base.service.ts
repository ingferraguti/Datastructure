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
 *  FOR CUSTOMIZE validation-ruleBaseService PLEASE EDIT ../validation-rule.service.ts
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
import { ValidationRule } from '../../domain/datastructure_db/validation-rule';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../ValidationRule.service.ts
 */

/*
 * SCHEMA DB ValidationRule
 *
	{
		Name: {
			type: 'String',
			required : true
		},
		Rule: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		ValidationRule: [{
			type: Schema.ObjectId,
			ref : "DataEntity"
		}],
	}
 *
 */
@Injectable()
export class ValidationRuleBaseService {

    contextUrl: string = environment.endpoint + '/validationrule';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ValidationRuleService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: ValidationRule): Observable<ValidationRule> {
        return this.http
            .post<ValidationRule>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ValidationRuleService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ValidationRuleService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<ValidationRule> {
        return this.http
            .get<ValidationRule>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ValidationRuleService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<ValidationRule[]> {
        return this.http
            .get<ValidationRule[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ValidationRuleService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: ValidationRule): Observable<ValidationRule> {
        return this.http
            .post<ValidationRule>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}