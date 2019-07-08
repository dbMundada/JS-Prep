// Understanding Generators in Javascript
// https://cloudnweb.dev/2019/06/understanding-generators-in-javascript-javascript-weekly/?fbclid=IwAR0LC4_x4m7S1MwHhgHPq8jivbZAPlknv5ktaUnarxYYNdIiUvMBm9CfEDM

(function() {
    var elements = document.querySelectorAll('[data-tw-bind]'),
        scope = {};

    elements.forEach(function(element) {
        //execute scope setter
        if(element.type === 'text'|| element.type === 'textarea'){
            var propToBind = element.getAttribute('data-tw-bind');
            addScopeProp(propToBind);
            element.onkeyup = function(){
                scope[propToBind] = element.value;
            }
        };

        //bind prop to elements
        function addScopeProp(prop){
            //add property if needed
            if(!scope.hasOwnProperty(prop)){
                //value to populate with newvalue
                var value;
                Object.defineProperty(scope, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function(element){
                            //change value to binded elements
                            if(element.getAttribute('data-tw-bind') === prop){
                                if(element.type && (element.type === 'text' ||
                                    element.type === 'textarea')){
                                    element.value = newValue;
                                }
                                else if(!element.type){
                                    element.innerHTML = newValue;
                                }
                            }
                        });
                    },
                    get: function(){
                        return value;
                    },
                    enumerable: true
                });
            }
        }
    });

    log = function() {
        Object.keys(scope).forEach(function(key){
            console.log(key + ': ' + scope[key]);
        });
    }

    changeNameByCode = function() {
        scope.name = 'name Changed by Code';
    }

    changeSurnameByCode = function() {
        scope.surname = 'surname Changed by Code';
    }
})();



<!DOCTYPE html>
<html>
  <head lang="en">
      <meta charset="UTF-8">
      <title>Two Way Data Binding</title>
  </head>
  <body>
    Name: <input data-tw-bind="name" type="text">
    <span data-tw-bind="name"></span>
    <hr />
    Surname: <input data-tw-bind="surname" type="text">
    <span data-tw-bind="surname"></span>
    <hr />
    <button onclick="log()">See Scope Values</button>
    <hr />
    <button onclick="changeNameByCode()">Change Name By Code</button>
    <hr />
    <button onclick="changeSurnameByCode()">Change Surname By Code</button>
    <hr />
    <script src="app.js"></script>
  </body>
</html>
