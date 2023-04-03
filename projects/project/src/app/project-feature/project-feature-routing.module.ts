import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectDashboardComponent } from '../project-dashboard/project-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFeatureRoutingModule { }
