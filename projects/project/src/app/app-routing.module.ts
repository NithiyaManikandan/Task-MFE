import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

const routes: Routes = [
  // {
  //   path: 'createProject',
  //   loadChildren: () =>
  //     import('employee/EmployeeFeatureModule').then(
  //       (m) => m.EmployeeFeatureModule
  //     ),
  // },
  {
    path:'',
    component:ProjectDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
