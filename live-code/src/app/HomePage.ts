import { Component } from "angular2/angular2";

import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";
@Component({
  selector: "home-page",
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>hello from home page</h1>
    <a [router-link]="['/Topic', { id: 'Router' }]">Router</a>
  `
})
class HomePage {
}

export default HomePage;
