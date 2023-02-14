import { NgModule } from '@angular/core';
/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { DataEntityService } from './services/data-entity.service';
import { DataObjectService } from './services/data-object.service';
import { DataTypeService } from './services/data-type.service';
import { ProjectService } from './services/project.service';
import { SchemaService } from './services/schema.service';
import { UserService } from './services/user.service';
import { ValidationRuleService } from './services/validation-rule.service';

/* END MY SERVICES IMPORTS*/
import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { SecurityService } from './security/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './security/auth.interceptor';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    DataEntityService,
    DataObjectService,
    DataTypeService,
    ProjectService,
    SchemaService,
    UserService,
    ValidationRuleService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: []
})
export class CoreModule {
}
