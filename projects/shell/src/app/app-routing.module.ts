import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('project/ProjectFeatureModule').then(
        (m) => m.ProjectFeatureModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('employee/EmployeeFeatureModule').then(
        (m) => m.EmployeeFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
