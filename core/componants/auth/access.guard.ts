import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  constructor(private route: Router) { }
  routing = [
    { id: 1, routeName: '/app/dashboard' },
    { id: 2, routeName: '/app/info' },
    { id: 3, routeName: '/app/timesheet' },
    { id: 4, routeName: '/app/info/general' },
    { id: 5, routeName: '/app/info/general/:edit/:id' },
    { id: 6, routeName: '/app/absent' }
  ];
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Routing', state.url);
    const index = this.routing.findIndex(x => x.routeName === state.url);
    if (index !== -1) {
      return true;
    }
    else {
      alert("You aren't permitted to visit this page");
      this.route.navigate(['/signin']);
      return false;
    }
  }

}
