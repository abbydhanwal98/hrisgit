import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,MatPaginatorModule,MatSelectModule } from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
 

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms';



import { OrganizationRoutingModule } from './organization-routing.module';
import { DepartmentComponent } from './department/department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

import { MatDialogModule,MatSortModule,MatTableModule } from '@angular/material';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';


@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    RouterModule,
    MatInputModule,
    NgxDatatableModule,
    FormsModule,
ReactiveFormsModule,

     MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,MatPaginatorModule,MatSortModule,
    MatTableModule,MatDialogModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule


  ],
  entryComponents:[CreateDepartmentComponent,EditDepartmentComponent,CreateEmployeesComponent],
  declarations: [DepartmentComponent, CreateDepartmentComponent, EditDepartmentComponent, EmployeesComponent, CreateEmployeesComponent]
})
export class OrganizationModule { }
