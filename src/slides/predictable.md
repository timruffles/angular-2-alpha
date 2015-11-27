## Predicability
{tags:{state:"title"}}

## ng 1 change detection

## `$scope`

## Behind the scenes

## `$apply()`

- library authors: wrap all async 

```javascript
// rought version of ng-click
el.on("click", function(event) {
  $scope.$apply(function() {
    $scope.$eval(userCallback, {
      $event: event,
    });
  });
});
```

## Pretty good, still nasty

## ng 2: no `$scope`

## Zones!

    @Component({
      selector: 'toggler',
      template: '<button (click)="toggle()">
        {{ msg }}</button>',
    })
    class TogglerComponent {
      constructor() { 
        this.msg = "Click me";
      }
      toggle() {
        this.msg = "You clicked me!";
        setTimeout(() => { 
          this.msg = "Click me";
        }, 250);
      }
    }

## How?

## Patching

Zones patch all async:

```javascript
window.setTimeout = function(fn, timeout) {
  originalTimeout(zone.callback(fn), timeout);
}
```

## MOAR!!!

- RxJS support
- Immutables via controlling updates
- ES.next support, non-TypeScript



