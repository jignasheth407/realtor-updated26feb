import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIsService } from '../../../apis.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})

export class AgencyDetailComponent implements OnInit {

  searchuser = new FormGroup({
    search : new FormControl('',Validators.required)
  })

  constructor(private router : Router , private http : APIsService) {
    var loginuser = JSON.parse(localStorage.getItem('userdetails'));
    // console.log(loginuser.isAdmin);
    if(loginuser.isAdmin == false){
      alert("YOU HAVE NO AUTHINTICATION TO THIS PAGE..!!")
      this.router.navigate(['/login']);
    }else{
      this.http.getuserdetils().subscribe(data=>{
        this.userlist = data;
        this.totalrecords = this.userlist.length;
        // console.log(data)
      },(error)=>{
        //api failed errorr
      })
    }
   }

   get searchbox(){return this.searchuser.get('search'); }

   userlist :any =[];
   totalrecords="";
   page = 1;
   searchiddata : any =[];
   statussearchid = false;

  ngOnInit(): void {
  }

  deleteuser(id: any){
    this.http.deleteuser(id).subscribe(data=>{
     alert("Selected User Is Deleted..!!");
    },error=>{
      alert("Somthing went Wrong Try Again..!!");
    })
  }

  searchid(){
    if(this.searchuser.get('search').value == ""){
      alert("No Empty Space Allowed..!!")
    }else{
      this.statussearchid = true;
      this.http.searchuserid(this.searchuser.get('search').value).subscribe(data=>{
        this.searchiddata = data
      },error=>{
        alert("User Not Found..!!");
      });
    }
  }

}
