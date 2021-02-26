import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  vistordata = new FormGroup({
    companyId : new FormControl('1',Validators.required),
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    PhoneNo : new FormControl('',Validators.required),
    Subject : new FormControl('',Validators.required),
    Message : new FormControl('',Validators.required),
  })

  constructor(private http : APIsService) { 
    var userdata = JSON.parse(localStorage.getItem('userdetails'));
     if(userdata !== null){
       if(userdata.isAdmin){
        this.contectblock = true;
        this.http.visitorsdetails().subscribe(data=>{
          // console.log(data)
          this.contectquerydata = data;
          this.totalrecords = this.contectquerydata.length;
        })
       }
     }
  }

  get firstname(){ return this.vistordata.get('FirstName') };
  get lastname(){ return this.vistordata.get('LastName') };
  get email(){ return this.vistordata.get('Email') };
  get phoneno(){ return this.vistordata.get('PhoneNo') };
  get subject(){ return this.vistordata.get('Subject') };
  get msg(){ return this.vistordata.get('Message') };

  ngOnInit(): void {
  }

  isadmin:any=[];
  contectblock = false;
  contectquerydata :any =[];
  totalrecords="";
  page = 1;
  
  vistdata(){
    if( this.vistordata.get('FirstName').value == "" || this.vistordata.get('LastName').value == "" || this.vistordata.get('PhoneNo').value == "" || this.vistordata.get('Message').value == "" || this.vistordata.get('Subject').value == "")
    {
      alert("No Empty Space Allowed..!!");
    }else{
      this.http.visitorsrequest(this.vistordata.value).subscribe(data=>{
        alert("Your Query's Has Been Send ThankYou..!!")
        window.location.reload();
       })
    }
     }

  vistdelete(id:any){
    this.http.visitorsdatadelete(id).subscribe(data=>{
      alert("Data Is Deleted..!!");
      window.location.reload();
    },error=>{
      alert("Data Is Not Deleted..!!");
      window.location.reload();
    })
  }
}
