import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { Router } from '@angular/router';
import { FormGroup , FormControl  } from '@angular/forms';
declare var jQuery: any;
@Component({
  selector: 'app-listing-map',
  templateUrl: './listing-map.component.html',
  styleUrls: ['./listing-map.component.css']
})
export class ListingMapComponent implements OnInit {

  searchdata = new FormGroup({
    Mlsmo : new FormControl(''),
    cityname : new FormControl(''),
    minprice : new FormControl('0'),
    maxprice :new FormControl('0'),
    beds : new FormControl('0'),
    bath : new FormControl('0'),
    propertytype : new FormControl('0'),
    transectiontype :new FormControl('0'),

  })

  constructor(private http : APIsService ,  private router : Router ) {
    this.http.dropdowndata().subscribe(data=>{
      this.dropdowndata = data;
      //  console.log(data)
    })
    this.userinfo = JSON.parse(localStorage.getItem('userdetails'));
  }
 
  ngOnInit(): void {
    (function ($) {
      var $buttons = jQuery('button');
$buttons.on('click',function() {
  jQuery(this).toggleClass('active').siblings('button').removeClass('active');
})
    })(jQuery);
    }
    
   
  dropdowndata :any =[];
  search=false;
  searchbyMlsno = false;
  dropstates = false;
  mlsresult:any = [];
  residential = "";
  commercial = "";
  dropdownsearchdetails : any =[];
  totalrecords="";
  page = 1;
  users:object;
  loading=true;

 
  searchquerys(){
    if(this.searchdata.get('Mlsmo').value !== "" && this.searchdata.get('cityname').value == ""){
      this.loading=true;
        this.search = true;
      this.searchbyMlsno = true;
      this.http.searchMlsno(this.searchdata.get('Mlsmo').value).subscribe(data=>{
        this.loading=false;
        this.mlsresult = data;
        this.totalrecords = this.mlsresult.length;
        // alert("working")
        // console.log("search data:"+data)//empty value hai
       },error=>{
         alert("Somthing Went Wrong Try Later..!!");
       })
    } else if(this.searchdata.get('Mlsmo').value == "" && this.searchdata.get('cityname').value !== ""){
      this.dropstates=true;

      this.dropdowndata.forEach(element => {
        if(element.name == this.searchdata.get('cityname').value){
          if(this.residential !== ""){
            let dropsearchobj = {
              Type:this.residential,
              CurrentPage:1,
              LatitudeMin:"43.4728479",
              LongitudeMax:"-79.5624177",
              RecordsPerPage:5,
              LongitudeMin:"-79.9624177",
              LatitudeMax:"43.9928479",
              BedRange:this.searchdata.get('beds').value,
              BathRange:this.searchdata.get('bath').value,
              NumberOfDays:0,
              SortBy:0,
              BuildingTypeId:this.searchdata.get('propertytype').value,
              PriceMax:this.searchdata.get('maxprice').value,
              PriceMin:this.searchdata.get('minprice').value,
              TransactionTypeId : this.searchdata.get('transectiontype').value
             }
            //console.log(dropsearchobj);
            this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
              this.loading=false;
              console.log(data);
              this.dropdownsearchdetails = data;
              this.totalrecords =  this.dropdownsearchdetails.length;
             },error=>{
               console.log(error)
             })
          }else if(this.commercial !== ""){
            let dropsearchobj = {
              Type:this.commercial,
              CurrentPage:1,
              LatitudeMin:"43.4728479",
              LongitudeMax:"-79.5624177",
              RecordsPerPage:5,
              LongitudeMin:"-79.9624177",
              LatitudeMax:"43.9928479",
              BedRange:this.searchdata.get('beds').value,
              BathRange:this.searchdata.get('bath').value,
              NumberOfDays:0,
              SortBy:0,
              BuildingTypeId:this.searchdata.get('propertytype').value,
              PriceMax:this.searchdata.get('maxprice').value,
              PriceMin:this.searchdata.get('minprice').value,
              TransactionTypeId : this.searchdata.get('transectiontype').value
             }
            console.log(dropsearchobj);
            this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
              this.loading=false;
              //console.log(data);
              this.dropdownsearchdetails = data;
              this.totalrecords =  this.dropdownsearchdetails.length;
             },error=>{
               console.log(error)
             })
          }
          else{
            let dropsearchobj = {
              Type:"residential",
              CurrentPage:1,
              LatitudeMin:"43.4728479",
              LongitudeMax:"-79.5624177",
              RecordsPerPage:5,
              LongitudeMin:"-79.9624177",
              LatitudeMax:"43.9928479",
              BedRange:this.searchdata.get('beds').value,
              BathRange:this.searchdata.get('bath').value,
              NumberOfDays:0,
              SortBy:0,
              BuildingTypeId:this.searchdata.get('propertytype').value,
              PriceMax:this.searchdata.get('maxprice').value,
              PriceMin:this.searchdata.get('minprice').value,
              TransactionTypeId : this.searchdata.get('transectiontype').value
             }
           // console.log(dropsearchobj);
            this.http.searchbyproptype(dropsearchobj).subscribe(data=>{
              this.loading=false;
              console.log(data);
              this.dropdownsearchdetails = data;
              this.totalrecords =  this.dropdownsearchdetails.length;
             },error=>{
               console.log(error)
             })
          }
        }
      })
    }else if(this.searchdata.get('Mlsmo').value !== "" && this.searchdata.get('cityname').value !== ""){
      alert("Please Select One Field..!!")
    }
    else{
      alert("NO Empty Space Allowed..!!")
    }

   
  }
  
  resi(){
   this.residential = "residential";
  }

  com(){
    this.commercial = "commercial";
   }
    
   userinfo :any = [];

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
      this.http.addsavelist(obj).subscribe(data=>{
        alert("Property Saved..!")
      },error=>{
       alert("Something Went Wrong Property Not Saved..!")
     })
      }
     }
}
