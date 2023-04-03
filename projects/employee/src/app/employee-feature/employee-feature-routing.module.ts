import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

const routes: Routes = [
  {
    path: 'employeeTable',
    component: TableComponent,
  },
  {
    path: 'createEmployee',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeFeatureRoutingModule {}
