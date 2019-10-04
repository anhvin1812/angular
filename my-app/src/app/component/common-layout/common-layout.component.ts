import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
})
export class CommonLayoutComponent implements OnInit {

   public user;

//   constructor(private authService: AuthService,
//               private router: Router) {}

  public ngOnInit() {
    this.user = {
        username: 'Tuan',
        email: 'leanhvin@gmail.com',
      };

    // this.authService.userData.subscribe(user => this.user = user ? user : {
    //   username: 'Luke',
    //   email: 'Luke@skywalker.com',
    // });
  }

  public logout() {
    // this.authService.logout()
    //   .subscribe(res => this.router.navigate(['/pages/login']));
  }
}
