import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { APIsService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class TokeInterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req,next){
    let http = this.injector.get(APIsService);
   let tokeniezedReq = req.clone({
     setHeaders : {
       Authorization : `Bearer ${http.getToken()}`
     }
   })
   return next.handle(tokeniezedReq)
  }
    
 
}
