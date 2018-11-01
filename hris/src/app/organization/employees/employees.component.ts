import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,MatSelectModule } from '@angular/material';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../globals/global';
//import {FlashMessage} from 'angular-flash-message';

import {PageEvent} from '@angular/material';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { CreateEmployeesComponent } from '../create-employees/create-employees.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
export interface DepartmentData {
    id: string;
    name: string;
}

export interface Issue {
    data: string;
    //name: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

	public form: FormGroup;
    demo_int: any=1;
    index: number;
    id: number;
    tabledata: any;

    private login_id=this.global.LOGGED_IN_DATA_CLIENT.user_id;

    private base_api_url:string=this.global.BASE_API_URL;

   displayedColumns: string[] = ['name','email','phone','gender','about','actions'];

   @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;
  listingdata: MatTableDataSource<DepartmentData>;

  constructor(private fb: FormBuilder,private http: HttpClient,private global:Global,public dialog: MatDialog) { }

  ngOnInit() {
    this.global.IS_LOGGED_IN;
  	this.getListing();
    //console.log('ruchi');
    //console.log(this.global.LOGGED_IN_DATA_CLIENT.user_id);
    console.log('check'+this.login_id);
    //this.base_api_url=this.global.BASE_API_URL;
  }



   getListing(){ 

    // this.base_api_url+'getEmployeesList/2'

    //this.global.IS_LOGGED_IN;           

       this.http.get('http://localhost:8081/api/employees/get_employees_details/'+this.login_id).subscribe(
      (data: any) => {
        console.log(data.data);
          this.tabledata=data.data;
          this.listingdata = new MatTableDataSource(this.tabledata);
          this.listingdata.paginator = this.paginator;
          this.listingdata.sort = this.sort;
      }
    );

  }//getListing

  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.listingdata.filter = filterValue;
  }

  addNew(issue: Issue) {
    const dialogRef = this.dialog.open(CreateEmployeesComponent, {
      data: {issue: 1 },
      height: '400px',
 	    width: '600px',
    }); 
    // dialogRef.close();

    dialogRef.afterClosed().subscribe(result => {
         
      //console.log(`Dialog result:`+result); // Pizza!
      this.getListing();


    
    });

    

  }

   

    startEdit(id,name="") {
    const dialogRef = this.dialog.open(EditDepartmentComponent, {
      data: {id: id,name:name }
    }); 
     dialogRef.afterClosed().subscribe(result => {
         
      console.log(`Dialog result:`+result); // Pizza!
      //alert('closed');
      /*this.tabledata.push({id: "389",  name: "abcd"});
       this.listingdata.paginator = this.paginator;
       this.listingdata.sort = this.sort;*/
       this.getListing();

    
    });



    

  }
   private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }

/*  deleteItem(i: number, id: number, title: string, state: string, url: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id: id, title: title, state: state, url: url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }*/

 // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

}
