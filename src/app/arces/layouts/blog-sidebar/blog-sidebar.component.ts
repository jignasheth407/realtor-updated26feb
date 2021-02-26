import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { APIsService } from '../../../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {

  writtenblog = new FormGroup({
    id: new FormControl(''),
    companyId: new FormControl(''),
    title : new FormControl('',Validators.required),
    url : new FormControl('', Validators.required),
    description : new FormControl('',Validators.required)
  });

  constructor(private http : APIsService , private router : Router) { 
    var data = JSON.parse(localStorage.getItem('userdetails'));
    if(data !== null)
    {
      this.adminstates=data.isAdmin;
    }else{
      this.adminstates = false;
    }
   }

  ngOnInit(): void {
  }
  

  adminstates : any = [];

  get title(){ return this.writtenblog.get('title') }
  get url(){ return this.writtenblog.get('url') }
  get description(){ return this.writtenblog.get('description') }


  makeblog(){
    if( this.writtenblog.get('title').value == "" || this.writtenblog.get('url').value == "" || this.writtenblog.get('description').value == "" ){
     alert("No Empty Space's allowed..!!")
    }else{
      this.writtenblog.get('id').setValue(1);
      this.writtenblog.get('companyId').setValue(1);
      
      this.http.makeblogs(this.writtenblog.value).subscribe(data=>{
         alert("Blog is Updated");
         this.router.navigate(['/blog-list']);
      },error=>{
        alert("Blog is Not Updated Try Again..!!");
        this.router.navigate(['/blog-list']);
      })
    }
  }

}
