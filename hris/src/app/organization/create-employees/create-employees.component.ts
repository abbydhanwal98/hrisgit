import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../globals/global';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatPaginator, MatSort,MatDialogRef,MatSelectModule} from '@angular/material';
import { CreateDepartmentComponent } from '../create-department/create-department.component';


//import {FlashMessage} from 'angular-flash-message';
//import { NgFlashMessagesModule } from 'ng-flash-messages';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {

private listingdata:any;
 	private base_api_url:string;
  	private login_data:any;
    private login_id=this.global.LOGGED_IN_DATA_CLIENT.user_id;
   public form: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router,private global:Global,private dialog: MatDialogRef<CreateEmployeesComponent>,public dialog1: MatDialog) {}
  ngOnInit() {
  	this.base_api_url=this.global.BASE_API_URL;

    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
     // range: [null, Validators.compose([Validators.required, CustomValidators.range([5, 9])])],
     // url: [null, Validators.compose([Validators.required, CustomValidators.url])],
      dob: [null, Validators.compose([Validators.required, CustomValidators.date])],
      //creditCard: [null, Validators.compose([Validators.required, CustomValidators.creditCard])],
      phone: [null, Validators.compose([Validators.required])],
      department: [null, Validators.required],
      position: [null, Validators.required],
      address: [null, Validators.required],
      about: [null, Validators.required],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword,
      client_id: [this.login_id],
     
    });


  }


  onSubmit(){
    console.log(this.base_api_url);
    console.log(this.form.value);
 /*   this.http.post(this.base_api_url+'add_department',
       {
         department:this.form.value.department_name,
         client_id:this.form.value.client_id,
       }
       )
         .subscribe(
           (data:any)=>{
             if(data.status_code==1){
               console.log('department Added');
               this.dialog.close();
               
               //this.router.navigate(['/organization/department']);
               //this.getListing()
               //this.closeAddExpenseModal.nativeElement.click();
             }else{
               console.log('Failure');
             }
           });*/
   

  }//onSubmit()

  newDept(){
     const dialogRef = this.dialog1.open(CreateDepartmentComponent, {
      data: {issue: 1 },
      height: '400px',
       width: '600px',
    }); 
    // dialogRef.close();

    dialogRef.afterClosed().subscribe(result => {
         
      //console.log(`Dialog result:`+result); // Pizza!
     // this.getListing();


    
    });
  }

}
