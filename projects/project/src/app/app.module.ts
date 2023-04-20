import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { DemoModule } from "../../../demo/src/lib/demo.module";
@NgModule({
    declarations: [
        AppComponent,
        AddProjectComponent,
        ProjectDashboardComponent,
        AssignProjectComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        DemoModule
    ]
})
export class AppModule {}
