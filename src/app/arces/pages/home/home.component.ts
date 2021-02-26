import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private apidata : APIsService) {

    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
    this.apidata.featuringlist().subscribe(data=>{
      this.loading=false;
       this.featurelistdata = data;
       this.totalrecords = this.featurelistdata.length;
       console.log(data);
    })
    
   }
   
   featurelistdata :any =[];
   userinfo :any = [];
   totalrecords="";
   page = 1;
   users:object;
   loading=true;
   slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 800,
    settings: {
    slidesToShow: 2
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 1
    }
    }
    ]
    };

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
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  next() {
  this.slickModal.slickNext();
  }
  
 prev() {
   this.slickModal.slickPrev();
 }

}
