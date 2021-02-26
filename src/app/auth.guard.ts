import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { APIsService } from '../app/apis.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http : APIsService ,
                    private route : Router){}
  
    canActivate():boolean{ 
      if(this.http.loggedin()){
        return true ;
      }else{
        this.route.navigate(['/login']);
        return false;
      }
    }
 
  
}
