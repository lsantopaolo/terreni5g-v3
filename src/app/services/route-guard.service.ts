import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

constructor(private route : Router) { }
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
  //this.route.navigate(['login'])
  return true;
}

}