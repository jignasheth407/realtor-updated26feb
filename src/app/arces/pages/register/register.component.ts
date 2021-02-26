import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  usersdetails = new FormGroup({
    UserName : new FormControl('' ,Validators.required),
    Password : new FormControl('' ,Validators.required),
    FirstName : new FormControl('' ,Validators.required),
    LastName : new FormControl('' ,Validators.required),
    Email : new FormControl('' ,Validators.required),
    PhoneNo : new FormControl('' ,Validators.required),
  })

  get username(){ return this.usersdetails.get('UserName') };
  get password(){ return this.usersdetails.get('Password') };
  get firstname(){ return this.usersdetails.get('FirstName') };
  get lastname(){ return this.usersdetails.get('LastName') };  
  get email(){ return this.usersdetails.get('Email') };
  get phoneno(){ return this.usersdetails.get('PhoneNo') };
  
  constructor(private http : APIsService , private router : Router ) { }

  ngOnInit(): void {
  }
  entereddata(){
    if(this.usersdetails.get('UserName').value == "" || this.usersdetails.get('Password').value == "" || this.usersdetails.get('FirstName').value == "" || this.usersdetails.get('LastName').value == "" || this.usersdetails.get('Email').value == "" || this.usersdetails.get('PhoneNo').value == "" ){
      alert("NO Empty Space Allowed..!!");
    }else{
      this.http.users(this.usersdetails.value).subscribe(data=>{
        this.router.navigate(['/login']);
      })
    }
  }
}
