import { Component, OnInit,Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../globals/global';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatPaginator, MatSort,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  id: string;
  name: string;
}


@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {

	private id:any;
	private listingdata:any;
 	private base_api_url:string=this.global.BASE_API_URL;
  	private login_data:any;
  	public departmentDetail:any;

  	public form: FormGroup;

    //subject = new BehaviorSubject(this.listingdata);


  constructor(private route: ActivatedRoute,private fb: FormBuilder,private http:HttpClient,private router:Router,private global:Global,private dialog: MatDialogRef<EditDepartmentComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {

    //this.departmentDetail = this.data; 
    alert(this.data.name);

   this.form = this.fb.group({
      department_name: [null, Validators.compose([Validators.required])]
     
    });

/*  	 this.route.params.subscribe(params => {
      console.log('abhi '+params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id=params['id'];
      //console.log(data.id);
      this.demo();
     let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get(this.apiurl + 'categories/get_category_details/' + id).subscribe(
      (status: any) => {
        this.categoryDetail = status.data[0];
      }
    );
    this.category = this.fb.group({
      category_name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      category_EULA: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.required])],

    });

    });*/

  	this.base_api_url=this.global.BASE_API_URL;

    this.form = this.fb.group({
      department_name: [null, Validators.compose([Validators.required])],
      client_id: ['2'],
     
    });
  }

  demo(){
  	console.log('abhi '+this.data.id);
  }

   onSubmit(){
    console.log(this.base_api_url);
    this.http.post(this.base_api_url+'update_department/'+this.data.id,
       {
         department:this.form.value.department_name
       }
       )
         .subscribe(
           (data:any)=>{
             if(data.status_code==1){
               console.log('department updated');
               this.dialog.close();
              // this.listingdata.push({id: "3899", client_id: "2", name: "abcd", slug: "", mail_alias: null});
               
               //this.router.navigate(['/organization/department']);
               //this.getListing()
               //this.closeAddExpenseModal.nativeElement.click();
             }else{
               console.log('Failure');
             }
           });
   

  }//onSubmit()

}
