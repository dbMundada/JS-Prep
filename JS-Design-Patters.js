// --------------------------------------------------------------------------
// 1. Module Design Pattern
    // -The purpose is to maintain encapsulation and reveal certain variables and
    // methods returned in an object literal.
    var tmpObj = (function() {
        // declare private variables and/or functions

        return { } // declare public variables and/or functions
    })();

    // Example 1:
    var Exposer = (function() {
      var privateVariable = 10;

      var privateMethod = function() {
        console.log('Inside a private method!');
        privateVariable++;
      }

      var methodToExpose = function() {
        console.log('This is a method I want to expose!');
      }

      var otherMethodIWantToExpose = function() {
        privateMethod();
      }

      return {
          first: methodToExpose,
          second: otherMethodIWantToExpose
      };
    })();

    Exposer.first();        // Output: This is a method I want to expose!
    Exposer.second();       // Output: Inside a private method!
    Exposer.methodToExpose; // undefined

    Although this looks much cleaner, an obvious disadvantage is unable to reference the private methods.
    This can pose unit testing challenges. Similarly, the public behaviors are non-overridable.

// --------------------------------------------------------------------------
// 2. Prototype Design Pattern

    Used to share the methods or some properties across the different instances.
    Also, will be used for inheritance purpose.


// --------------------------------------------------------------------------
// 3. Observer Design Pattern
    There are many times when one part of the application changes, other parts needs
    to be updated. In AngularJS, if the $scope object updates, an event can be triggered
    to notify another component. The observer pattern incorporates just that - if an
    object is modified it broadcasts to dependent objects that a change has occurred.


    var Subject = function() {
      this.observers = [];

      return {
        subscribeObserver: function(observer) {
          this.observers.push(observer);
        },
        unsubscribeObserver: function(observer) {
          var index = this.observers.indexOf(observer);
          if(index > -1) {
            this.observers.splice(index, 1);
          }
        },
        notifyObserver: function(observer) {
          var index = this.observers.indexOf(observer);
          if(index > -1) {
            this.observers[index].notify(index);
          }
        },
        notifyAllObservers: function() {
          for(var i = 0; i < this.observers.length; i++){
            this.observers[i].notify(i);
          };
        }
      };
    };

    var Observer = function() {
      return {
        notify: function(index) {
          console.log("Observer " + index + " is notified!");
        }
      }
    };

    var subject = new Subject();

    var observer1 = new Observer();
    var observer2 = new Observer();
    var observer3 = new Observer();
    var observer4 = new Observer();

    subject.subscribeObserver(observer1);
    subject.subscribeObserver(observer2);
    subject.subscribeObserver(observer3);
    subject.subscribeObserver(observer4);

    subject.notifyObserver(observer2); // Observer 2 is notified!

    subject.notifyAllObservers();
    // Observer 1 is notified!
    // Observer 2 is notified!
    // Observer 3 is notified!
    // Observer 4 is notified!

// --------------------------------------------------------------------------
// 4. Singleton Design Pattern
    var mySingleton = (function () {
      // Instance stores a reference to the Singleton
      var instance;
      function init() {
        // Singleton
        // Private methods and variables
        function privateMethod(){
            console.log( "I am private" );
        }
        var privateVariable = "Im also private";
        var privateRandomNumber = Math.random();
        return {
          // Public methods and variables
          publicMethod: function () {
            console.log( "The public can see me!" );
          },
          publicProperty: "I am also public",
          getRandomNumber: function() {
            return privateRandomNumber;
          }
        };
      };

      return {
         // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
          if ( !instance ) {
            instance = init();
          }
          return instance;
        }
      };
    })();

    var singleA = mySingleton.getInstance();
    var singleB = mySingleton.getInstance();
    console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true

// --------------------------------------------------------------------------
// 1. Module Design Pattern
