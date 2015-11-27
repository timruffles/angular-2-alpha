import { Component } from "angular2/angular2";
import Greeter from "./Greeter";

import { ROUTER_DIRECTIVES, RouteParams } from "angular2/router";

@Component({
  selector: "topic-page",
  providers: [Greeter],
  directives: [ROUTER_DIRECTIVES],
  template: "<h1>{{ message }}</h1>"
})
class TopicPage {
  constructor(greeter: Greeter, data: RouteParams) {
    this.message = greeter.message(data.get("id"));
  }
}

export default TopicPage;

