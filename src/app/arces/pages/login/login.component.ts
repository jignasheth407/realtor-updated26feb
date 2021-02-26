import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   loginuser = new FormGroup({
    UserName : new FormControl('' , Validators.required),
    Password : new FormControl('' , Validators.required),
   })

   get username(){ return this.loginuser.get('UserName')}
   get pwd(){ return this.loginuser.get('Password')}

  constructor(private http : APIsService ,  private router : Router) {
    var alreadylogin = JSON.parse(localStorage.getItem('userdetails'));
    if(alreadylogin !== null){
      var id = btoa(alreadylogin.id);
     this.router.navigate(['/profile/'+id]);
    }else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    localStorage.setItem('sessionuser',this.loginuser.value)
  }

  dataobj : any ='';


  loggeduser(){
    var name = this.loginuser.get('UserName').value;
    var pass = this.loginuser.get('Password').value;
    if(name == "" && pass == "")
    {
      alert("invalid Username/Password...!!")
    }
    else{
      this.http.login(this.loginuser.value).subscribe((data)=>{ 
        this.dataobj = data;
        localStorage.setItem('token',this.dataobj.token);
        localStorage.setItem('userdetails',JSON.stringify(data));
        var id = btoa(this.dataobj.id);
        this.router.navigate(['/profile/'+id]);
     }
     ,(error)=>{
      alert("invalid Username/Password...!!")
     }
     )
    }
   
  }
}
