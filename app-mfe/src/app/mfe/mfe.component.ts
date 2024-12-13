import { Component } from '@angular/core';

@Component({
  selector: 'app-mfe',
  template: `<h1>Welcome to SCM Micro Front End !</h1>
    <nav>
      <a routerLink="link1">Requested&nbsp;</a>
      <a routerLink="link2">Completed</a>
    </nav><router-outlet></router-outlet>`,
})
export class MfeComponent {}
