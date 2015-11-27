import { bootstrap, provide } from "angular2/angular2";

import DemoApp from "./DemoApp";

import Greeter from "./Greeter";
import { ROUTER_PROVIDERS, Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from "angular2/router";

bootstrap(DemoApp, [
  Greeter
  , ROUTER_PROVIDERS
  , provide(LocationStrategy, { useClass: PathLocationStrategy })
  , provide(APP_BASE_HREF, { useValue: "/src" })
]);
