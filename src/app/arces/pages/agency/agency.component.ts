import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators } from '@angular/forms';
import { APIsService } from '../../../apis.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  morgrageappdata = new FormGroup({
    id :new FormControl('',Validators.required),
    companyId :new FormControl('',Validators.required),
    firstName :new FormControl('',Validators.required),
    lastName :new FormControl('',Validators.required),
    phoneNo :new FormControl('',Validators.required),
    email :new FormControl('',Validators.required),
    subject :new FormControl('',Validators.required),
    message :new FormControl('',Validators.required),
  })

  constructor(private http : APIsService ) {
    this.userdetails =JSON.parse(localStorage.getItem('userdetails'));
   }

  userdetails :any = [];

  ngOnInit(): void {
    
  }

  get fname(){ return this.morgrageappdata.get('firstName')}
  get lname(){ return this.morgrageappdata.get('lastName')}
  get pno(){ return this.morgrageappdata.get('phoneNo')}
  get email(){ return this.morgrageappdata.get('email')}
  get sbj(){ return this.morgrageappdata.get('subject')}
  get msg(){ return this.morgrageappdata.get('message')}


  morgarageformdata(){
   this.morgrageappdata.get('id').setValue(1);
   this.morgrageappdata.get('companyId').setValue(1);
   if(this.morgrageappdata.get('firstName').value == "" || this.morgrageappdata.get('lastName').value == "" || this.morgrageappdata.get('phoneNo').value == "" || this.morgrageappdata.get('email').value == "" || this.morgrageappdata.get('subject').value == "" || this.morgrageappdata.get('message').value == ""){
    alert("No Blank's Allowed..!!")
   }else{
     console.log(this.morgrageappdata.value)
   this.http.mortgagepreapproval(this.morgrageappdata.value).subscribe(data=>{
    alert("Your MortgagePreApproval Is Send..!!");
    window.location.reload();
   },error=>{
    alert("Your MortgagePreApproval Is Not Send..!!");
    window.location.reload();
   })

       }
   
  
  }
}
