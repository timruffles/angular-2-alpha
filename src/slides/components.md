## Components
{tags:{state:"title"}}

## Our first component

```javascript
import { Component } from 'angular2/angular2';

export { HelloComponent };

@Component({
  selector: 'hello-angular',
  template: '<h1>{{ message }}</h1>',
})
class HelloComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

## Woah!

## Bit by bit

##  
{tags:{state:"notitle"}}

```javascript
import { Component } from 'angular2/angular2';
```

##  
{tags:{state:"notitle"}}

```javascript
export { HelloComponent };
```

##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // any CSS selector
  selector: 'hello-angular',
  // ...
})
```

##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // ...
  template: '<h1>{{ message }}</h1>',
})
```

##   
{tags:{state:"notitle"}}

```javascript
class HelloComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

## All together

```javascript
import { Component } from 'angular2/angular2';

export { HelloComponent };

@Component({
  selector: 'hello-angular',
  template: '<h1>{{ message }}</h1>',
})
class HelloComponent {
  constructor() { 
    this.message = "Hi there";
  }
}
```

## That's an app!

```javascript
import { HelloComponent } from "./HelloComponent";
import { bootstrap } from "angular2/angular2";

bootstrap(HelloComponent);
```


```javascript
<!DOCTYPE html>
<hello-component></hello-component>
<!-- with a production bundle -->
<script src="dist/app.js"></script>
```

## Hierarchy

```typescript
import { Component } from 'angular2/angular2';
import { HelloComponent } from './HelloComponent';

export { FrontPage };

@Component({
  selector: 'front-page',
  directives: [HelloComponent],
  template: '<hello-angular></hello-angular>',
})
class FrontPage {
}
```

## Explicit

```typescript
import { Component, FORM_DIRECTIVES, CORE_DIRECTIVES }
 from 'angular2/angular2';

@Component({
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  // ...
})
```

## New template syntax

## Data binding

```html
<!-- like ng 1 - interpolated -->
<div title="Hello {{ person }}">
<!-- whole attribute -->
<div [title]="getMessage()">
```

## Pipes (new name for filters)

```html
<div [title]="getMessage() | toTitle">
```

## Event-handling

```html
<!-- DOM events -->
<form (submit)="create($event)">
```

## Two-way data-binding

```html
<!-- the local ourName property will be two way bound to `name`
     of our some-editor component -->
<some-editor ([name])="ourName">
```

## Local variables

```html
<video #movieplayer >
  <button (click)="movieplayer.play()">
</video>
```

## Let's have a go
{tags:{state:"title"}}


