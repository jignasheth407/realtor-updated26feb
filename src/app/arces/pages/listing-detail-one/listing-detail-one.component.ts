import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-listing-detail-one',
  templateUrl: './listing-detail-one.component.html',
  styleUrls: ['./listing-detail-one.component.css']
})
export class ListingDetailOneComponent implements OnInit {

  constructor(private apidata : APIsService , private route : ActivatedRoute) { 
    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
    this.id = this.route.snapshot.params.propid;
    this.refno = this.route.snapshot.params.refno;
    var prprefobj ={
      propno : this.id,
      refno : this.refno
    }
    this.apidata.viewproperty(prprefobj).subscribe(data=>{
        this.featurelistdata = data
          console.log(this.featurelistdata)
    })

    this.apidata.agentdetail().subscribe((agentdata)=>{
      this.agentdetails = agentdata;
      // console.log(this.agentdetails);
   })

   }

   featurelistdata :any = [];
   agentdetails : any = [];
   id :any ;
   refno : any ;
   userinfo :any = [];

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
