function Foo(y) {
  this.y = y;
}
Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};

// Create instance b using the object Foo:

var b = new Foo(20);
b.calculate(30); // 60
console.log(
  b.__proto__ === Foo.prototype, // true
  b.__proto__.calculate === Foo.prototype.calculate, // true
  b.__proto__.calculate === b.calculate, // true
  Foo === b.constructor, // true
  Foo === Foo.prototype.constructor, // true
);

// ==============================================================================
function talk() {
  console.log(this);
  console.log(this.sound);
}
// talk();
let animal = { talk };
let cat ={
  sound: 'meow!'
};
Object.setPrototypeOf(cat, animal);
cat.talk();


let dog = {
  sound: 'woof!'
};
let parineDog = {
  howl: function (){
    console.log(this.sound.toUpperCase());
  }
}
Object.setPrototypeOf(dog, animal);
dog.talk();
Object.setPrototypeOf(parineDog, dog);
parineDog.howl();

// ================================================================================
const food = {
  init: function (type) {
    this.type = type;
  },
  eat: function () {
    console.log('Please ate it ' + this.type);
  }
};

const waffle = Object.create(food);
const biscuit = Object.create(food);

// food.eat = function() {
//   console.log('Plan changed. I ate it ' + this.type)
// };

waffle.init('waffle');
biscuit.init('biscuit');

food.init('food');

waffle.eat();
biscuit.eat();

console.log(food.isPrototypeOf(waffle));
console.log(food.isPrototypeOf(Object));
