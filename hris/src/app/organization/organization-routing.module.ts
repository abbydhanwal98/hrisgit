import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
{
    path: 'department',
    component: DepartmentComponent
},
{
    path: 'createDepartment',
    component: CreateDepartmentComponent
},
{
    path: 'editDepartment/:id',
    component: EditDepartmentComponent
},
{
    path: 'employees',
    component: EmployeesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
