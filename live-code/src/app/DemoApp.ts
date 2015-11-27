import { Component } from "angular2/angular2";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";

import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

@RouteConfig([
  {
    path: "/",
    as: "Home",
    component: HomePage
  },
  {
    path: "/topic/:id",
    as: "Topic",
    component: TopicPage
  },
])
@Component({
  selector: "app"
  template: "<router-outlet></router-outlet>"
  directives: [TopicPage, ROUTER_DIRECTIVES]
})
class DemoApp {
}

export default DemoApp;
