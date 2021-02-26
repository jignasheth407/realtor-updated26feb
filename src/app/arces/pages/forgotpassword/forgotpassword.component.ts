import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { APIsService } from '../../../apis.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotdata = new FormGroup({
    username : new FormControl('',Validators.required),
    // description : new FormControl('',Validators.required),
    // forgotpass : new FormControl('',Validators.required) 
  });

  get username(){return this.forgotdata.get('username')}
  // get description(){return this.forgotdata.get('description')}
  // get forgotpass(){return this.forgotdata.get('forgotpass')}


  constructor(private http : APIsService) { }

  ngOnInit(): void {
  }

  forgotpwd(){
    if(this.forgotdata.get('username').value == ""){
          alert("Submit The UserName..!! Please");
    }else{
      this.http.forgetpassword(this.forgotdata).subscribe(data=>{
        // console.log(data);
        alert("Your Request is Send Check Your Email Please..!!")
      },error=>{
        // console.log(error);
        alert("Denined..!!")
      })
    }
  }

}
