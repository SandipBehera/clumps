import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from './API.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:APIService, private router: Router)
  {

  }
  canActivate(){
    if(this.api.isuserLoggedIn)
    {
      return true;
    }
    else
    {
      window.alert("Permission Denied!!");
      this.router.navigate(['/admin']);
      return false;
    }
  }
  
}
