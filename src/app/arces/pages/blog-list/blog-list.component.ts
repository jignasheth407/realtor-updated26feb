import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private http : APIsService , private route : Router) { 

    var id = 1;
    this.http.blogs(id).subscribe(data=>{
      // console.log(data);
     this.getblogs = data;
     this.totalrecords = this.getblogs.length;
    },error=>{
      //api failed error
    })

    var data = JSON.parse(localStorage.getItem('userdetails'));
    if(data !== null){
      this.accessstates = data.isAdmin;
    }else{this.accessstates = false}
  }
  
  accessstates:any ="";
  getblogs:any = [];
  totalrecords="";
  page = 1;

    
  ngOnInit(): void {}

  deleteblog(id : any){
   this.http.deleteblog(id).subscribe(data=>{
    alert(" Blog Is Deleted..!!");
     this.route.navigate(['/blog-list']);
   },error=>{
     alert("Sorry The Blog Is Not Deleted..!!");
     this.route.navigate(['/blog-list']);

   })
  }
  
}
