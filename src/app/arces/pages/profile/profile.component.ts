import { Component, OnInit } from '@angular/core';
import { APIsService } from '../../../apis.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup , FormControl , Validators } from '@angular/forms';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  updatedata = new FormGroup({
    id : new FormControl(''),
    companyId : new FormControl(''),
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    phoneNo : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    pwd : new FormControl('',Validators.required),
    subject : new FormControl(''),
    userTypeId : new FormControl(''),
    isAdmin : new FormControl(''),
    isActive : new FormControl(''),
    activationCode : new FormControl(''),
    token : new FormControl(''),
    tokenExpires : new FormControl(''),
   })

   agentupdatedetails = new FormGroup({
     id : new FormControl(''),
     companyId : new FormControl('',Validators.required),
     firstname : new FormControl('',Validators.required),
     lastname : new FormControl('',Validators.required),
     title : new FormControl('',Validators.required),
     email : new FormControl('',Validators.required),
     phoneno : new FormControl('',Validators.required),
     image :new FormControl('',Validators.required),
    //  fileSource: new FormControl('', [Validators.required])

   });

  userdatas:any = [];
  id :any ;
  blockstates = false;

  constructor(private http : APIsService ,private route  :ActivatedRoute) {
        this.http.userdetails().subscribe(data=>{
         this.userdatas =data;
         this.userdatas.forEach((item)=>{
           if(item.id == this.id){
            this.updatedata.get('id').setValue(item.id);
            this.updatedata.get('companyId').setValue(item.companyId);
            this.updatedata.get('userName').setValue(item.userName);
            this.updatedata.get('pwd').setValue(item.password);
            this.updatedata.get('firstName').setValue(item.firstName);
            this.updatedata.get('lastName').setValue(item.lastName);
            this.updatedata.get('phoneNo').setValue(item.phoneNo);
            this.updatedata.get('email').setValue(item.email);
            this.updatedata.get('subject').setValue(item.subject);
            this.updatedata.get('userTypeId').setValue(item.userTypeId);
            this.updatedata.get('isAdmin').setValue(item.isAdmin);
            this.updatedata.get('isActive').setValue(item.isAdmin);
            this.updatedata.get('activationCode').setValue(item.activationCode);
            this.updatedata.get('token').setValue(item.token);
            this.updatedata.get('tokenExpires').setValue(item.tokenExpires);
          }
         })
        })

        this.http.agentdetail().subscribe(data=>{
         this.agentdata = data;
        //  console.log(data);
        },error=>{
          //api error
        });
  }

  get username(){ return this.updatedata.get('userName')}
  get firstname(){ return this.updatedata.get('firstName')}
  get lastname(){ return this.updatedata.get('lastName')}
  get phoneno(){ return this.updatedata.get('phoneno')}
  get email(){ return this.updatedata.get('email')}
  get pwd(){ return this.updatedata.get('password')}
  get password(){ return this.updatedata.get('pwd')}

  ngOnInit(): void {
    var id = this.route.snapshot.params.id;
    this.id = atob(id);
  }

  logout(){
    this.http.logoutuser();
  }

  savechanges(){
    if(this.updatedata.get('userName').value == "" || this.updatedata.get('firstName').value == "" || this.updatedata.get('lastName').value == "" || this.updatedata.get('phoneNo').value == "" ||  this.updatedata.get('email').value == "" || this.updatedata.get('password').value == "")
    {
     alert("No Empty SpaceAllowed..!!")
    }
    else if(this.updatedata.get('password').value !== this.updatedata.get('pwd').value){
     alert("Password Not Match...!! ")
    }
    else {
    this.http.edituserprofile(this.updatedata.value).subscribe(data=>{
      alert('Profile Is Updated..!!');
      window.location.reload();
    },error=>{
      alert('Profile Is NotUpdated..!!');
      window.location.reload();
    })
        }
  }
  
  list = false;
  savelist :any =[];

  savelisting(){
   this.list= true;
   this.blockstates = false;
   this.agentblock = false;
   this.newsletterblock = false;
   this.userdatas.forEach((item)=>{
    if(item.id == this.id){
      this.http.usersavelist().subscribe(data=>{
       this.savelist = data;
       this.totalrecords = this.savelist.length;
        //console.log(data)
      },(error)=>{
          //when api failed..!!1
      })
    }
   })
  
  }

  deletesavelisting(id : any){
    this.http.deletesavelisting(id).subscribe(data=>{
      alert('Saved Property Deleted..!!');
    },error=>{
      alert('Saved Property Not Deleted..!!');
    })
  }

  blockedit(){  this.list= false; this.blockstates = true; this.agentblock = false;this.newsletterblock = false;}
  
  agentdata:any=[];
  agentblock=false;

  editagentdetail(){
    this.agentblock = true;
    this.blockstates = false;
    this.list= false;
    this.newsletterblock = false;
    this.agentupdatedetails.get('id').setValue(this.agentdata.id);
    this.agentupdatedetails.get('companyId').setValue(this.agentdata.companyId);
    // this.agentupdatedetails.get('image').setValue(this.agentdata.imagePath);
    this.agentupdatedetails.get('phoneno').setValue(this.agentdata.phoneNo);
    this.agentupdatedetails.get('firstname').setValue(this.agentdata.firstName);
    this.agentupdatedetails.get('lastname').setValue(this.agentdata.lastName);
    this.agentupdatedetails.get('email').setValue(this.agentdata.email);
    this.agentupdatedetails.get('title').setValue(this.agentdata.title);
  }
  
  get agentfirstname(){return this.agentupdatedetails.get('firstname'); }
  get agentlastname(){return this.agentupdatedetails.get('lastname'); }
  get agentemail(){return this.agentupdatedetails.get('email'); }
  get agenttitle(){return this.agentupdatedetails.get('title'); }
  get agentphoneno(){return this.agentupdatedetails.get('phoneno'); }
  get agentcompanyid(){return this.agentupdatedetails.get('companyId'); }

  //image upload
  // onFileChange(event) {
  //   const reader = new FileReader();
    
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
    
  //     reader.onload = () => {
   
  //       // this.imageSrc = reader.result as string;
     
  //       this.agentupdatedetails.patchValue({
  //         fileSource: reader.result
  //       });
   
  //     };
   
  //   }
  // }
  updateagent(){
    if(this.agentupdatedetails.get('firstname').value == "" || this.agentupdatedetails.get('lastname').value == "" || this.agentupdatedetails.get('email').value == "" || this.agentupdatedetails.get('title').value == "" || this.agentupdatedetails.get('phoneno').value == "" ||this.agentupdatedetails.get('companyId').value == ""  ){
      alert("NO Empty Space Allowed..!!")
    }else{
       console.log(this.agentupdatedetails.value);
        // this.http.editagent(this.agentupdatedetails.value).subscribe(data=>{
        //   alert("Profile Updated..!!");
        //   window.location.reload();
        // },error=>{
        //   alert("Profile Not Updated..!!");
        //   window.location.reload();
        // })
    }
  }

  
  totalrecords="";
   page = 1;
  newsletterblock = false;
  newsletterdata :any =[];
  newsstates(){
    this.newsletterblock = true;
    this.agentblock = false;
    this.blockstates = false;
    this.list = false;
    this.http.Newsdetails().subscribe(data=>{
      // console.log(data);
      this.newsletterdata =data;
      this.totalrecords = this.newsletterdata;
    },error=>{
      // console.log(error);
    })
  }
  deletenews(id:any){
  this.http.newsletterdelete(id).subscribe(data=>{
    alert('Letter Deleted..!!');
    window.location.reload();
  },error=>{
    alert('Letter Not Deleted..!!');
    window.location.reload();
  })
  }
}
