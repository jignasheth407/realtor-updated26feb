import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {

  constructor(private apidata : APIsService , private route : ActivatedRoute) {
   
    this.apidata.featuringlist().subscribe(data=>{
         console.log(data);
         this.featurelistdata = data;
         this.loading = false;
         this.totalrecords =   this.featurelistdata.length;
    })
    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
   }

   featurelistdata :any =[];
   totalrecords="";
   page = 1;
   userinfo :any = [];
   users:object;
   loading=true;

  ngOnInit(): void {
  }

  saveproperty(propertyid :any){
    console.log(propertyid);
    //saveprorperty in login
    if(this.userinfo == null){
      alert("To Save The Property Please Login..!!")
    }else{
     let obj = {
       id : 1,
       companyId : 1,
       userId : this.userinfo.id,
       referenceNumber : propertyid,
       propertyID : propertyid
     }
    this.apidata.addsavelist(obj).subscribe(data=>{
      alert("Property Saved..!")
    },error=>{
     alert("Something Went Wrong Property Not Saved..!")
   })
    }
   }

}
