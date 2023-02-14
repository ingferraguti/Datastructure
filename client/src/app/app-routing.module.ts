// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { DataEntityEditComponent} from './pages/data-entity-edit/data-entity-edit.component';
import { DataEntityListComponent} from './pages/data-entity-list/data-entity-list.component';
import { DataTypeEditComponent} from './pages/data-type-edit/data-type-edit.component';
import { DataTypeListComponent} from './pages/data-type-list/data-type-list.component';
import { ProjectEditComponent} from './pages/project-edit/project-edit.component';
import { ProjectListComponent} from './pages/project-list/project-list.component';
import { ValidationRuleEditComponent} from './pages/validation-rule-edit/validation-rule-edit.component';
import { ValidationRuleListComponent} from './pages/validation-rule-list/validation-rule-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'dataentitys/:id',  loadChildren: './pages/data-entity-edit/data-entity-edit.module#DataEntityEditModule' , canActivate: [AuthGuard] },
    { path: 'dataentitys',  loadChildren: './pages/data-entity-list/data-entity-list.module#DataEntityListModule' , canActivate: [AuthGuard] },
    { path: 'datatypes/:id',  loadChildren: './pages/data-type-edit/data-type-edit.module#DataTypeEditModule' , canActivate: [AuthGuard] },
    { path: 'datatypes',  loadChildren: './pages/data-type-list/data-type-list.module#DataTypeListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'projects/:id',  loadChildren: './pages/project-edit/project-edit.module#ProjectEditModule' , canActivate: [AuthGuard] },
    { path: 'projects',  loadChildren: './pages/project-list/project-list.module#ProjectListModule' , canActivate: [AuthGuard] },
    { path: 'validationrules/:id',  loadChildren: './pages/validation-rule-edit/validation-rule-edit.module#ValidationRuleEditModule' , canActivate: [AuthGuard] },
    { path: 'validationrules',  loadChildren: './pages/validation-rule-list/validation-rule-list.module#ValidationRuleListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
