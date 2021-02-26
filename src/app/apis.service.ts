import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http : HttpClient , private router : Router) { }

 featuringlist(){
    let url = "https://realtorapi.yellow-chips.com/realtor/1/featuredlisting/all";
    return this.http.get(url);
               
  }

  viewproperty(prprefobj : any){
    let url = "https://realtorapi.yellow-chips.com/realtor/1/detail/ReferenceNumber="+prprefobj.refno+";PropertyID="+ prprefobj.propno;
    return this.http.get(url);
  }

  agentdetail(){
    let url = "https://realtorapi.yellow-chips.com/agents/1";
    return this.http.get(url);
  }
  editagent(data:any){
    let url = " https://realtorapi.yellow-chips.com/agents";
    return this.http.put(url,data);
  }

  searchMlsno(data){
     let url = "https://realtorapi.yellow-chips.com/realtor/1/mls/ReferenceNumber="+data;
     return this.http.get(url);
  }
 

  subcrption(data:any){
    let url = "https://realtorapi.yellow-chips.com/NewsLetters";
    return this.http.post(url,data);
 }

 Newsdetails(){
   let url = "https://realtorapi.yellow-chips.com/NewsLetters/1";
   return this.http.get(url);
 }

 newsletterdelete(id:any){
   let url = "https://realtorapi.yellow-chips.com/NewsLetters/"+id;
   return this.http.delete(url);
 }

 visitorsrequest(data : any){
   let url = "https://realtorapi.yellow-chips.com/visitors";
   return this.http.post(url,data);                
 }

 visitorsdetails(){
   let url = "https://realtorapi.yellow-chips.com/Visitors/1";
   return this.http.get(url);
 }

 visitorsdatadelete(id : any){
   let url = "https://realtorapi.yellow-chips.com/Visitors/"+id;
   return this.http.delete(url);
 }


 users(data : any){
   let url = "https://realtorapi.yellow-chips.com/users";
   return this.http.post(url,data);
                
 }
 

 login(data : any){
  let url = "https://realtorapi.yellow-chips.com/users/authenticate";
  return this.http.post(url,data);
            
 }

 loggedin(){
   return !!localStorage.getItem('token');
 }

 getToken(){
   return localStorage.getItem('token');
 }

 logoutuser(){

   localStorage.removeItem('token');
   localStorage.removeItem('userdetails');
   this.router.navigate(['./login']);
 }
 userdetails(){
  let url = "https://realtorapi.yellow-chips.com/Users";
  return this.http.get(url);
 }

 edituserprofile(updatedata : any){
   let url = "https://realtorapi.yellow-chips.com/Users/"+updatedata.id;
   return this.http.put(url,updatedata)
 }

 featurelistingbyuserid(companyid : any){
   let url = "https://realtorapi.yellow-chips.com/FeaturedListings/"+companyid;
   return this.http.get(url);
 }

 
 usersavelist(){
   let url = "https://realtorapi.yellow-chips.com/SavedListings/1";
   return this.http.get(url);
 }

 deletesavelisting(id :any){
  let url = "https://realtorapi.yellow-chips.com/SavedListings/"+id;
  return this.http.delete(url);
 }

 addsavelist(data:any){
   let url = "https://realtorapi.yellow-chips.com/SavedListings";
   return this.http.post(url,data);
 }

 blogs(companyid :any){
   let url = "https://realtorapi.yellow-chips.com/Blogs/"+companyid;
   return this.http.get(url);
 }

 makeblogs(req:any){
  let url = "https://realtorapi.yellow-chips.com/Blogs";
  return this.http.post(url,req);
 }

 deleteblog(id : any){
   let url = "https://realtorapi.yellow-chips.com/Blogs/"+id;
   return this.http.delete(url);
 }

 dropdowndata(){
   let url = "https://realtorapi.yellow-chips.com/locations";
   return this.http.get(url);
 }
 
 mortgagepreapproval(data : any){
   let url ="https://realtorapi.yellow-chips.com/api/MortgagePreApproval/";
   return this.http.post(url,data);
 }

 getuserdetils(){
   let url ="https://realtorapi.yellow-chips.com/Users";
   return this.http.get(url);
 }

 deleteuser(id : any){
   let url = "https://realtorapi.yellow-chips.com/Users/"+id;
   return this.http.delete(url);
 }

 appointmentdetails(companyid : any){
   let url= "https://realtorapi.yellow-chips.com/Appointments/"+companyid;
   return this.http.get(url);
 }

 makeappointments(apponitmentreq: any){
   let url ="https://realtorapi.yellow-chips.com/Appointments"
   return this.http.post(url,apponitmentreq)
 }

 deleteappoinment(id : any){
   let url = "https://realtorapi.yellow-chips.com/Appointments/"+id;
   return this.http.delete(url);
 }

 searchuserid(id:any){
   let url = "https://realtorapi.yellow-chips.com/Users/"+id;
   return this.http.get(url);
 }

 forgetpassword(details : any){
   var forgetpassword = "forgetpassword";
   var forgetpassword2 = "report";
  //  console.log(details.value.username);
   let url = "https://realtorapi.yellow-chips.com/Users/"+forgetpassword+"/"+forgetpassword2+"/"+details.value.username;
   return this.http.get(url)
 }

 searchbyproptype(searchdata:any){
   let url = "https://realtorapi.yellow-chips.com/realtor/1";
   return this.http.post(url,searchdata)
 }

}
