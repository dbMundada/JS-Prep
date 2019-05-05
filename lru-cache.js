class LRU {
    constructor(max=10) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        if (item) // refresh key
        {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key, val) {
        if (this.cache.has(key)) // refresh key
            this.cache.delete(key);
        else if (this.cache.size == this.max) // evict oldest
            this.cache.delete(this._first());
        this.cache.set(key, val);
    }

    _first(){
        return this.cache.keys().next().value;
    }
}

var LRUCache =  function(capacity){
  var map = {};

  return {
    // get function returns an integer
    map: map,
    get: function(key){

        var val = map[key];
        if (val) {
            delete map[key];
            map[key] =  val;
            return val;
        }
        return -1;

    },
    // set returns nothing
    set: function(key, value){
        // Item is present
        var keys = Object.keys(map);

        if (map[key]) {
            delete map[key];
            map[key] = value;

        } else if (keys.length === capacity) {
            var first_key = map[keys[0]];

            delete map[first_key];
            map[key] = value;

        } else {
            map[key] = value;
        }
    }
  }
};

var x = new LRUCache(3);
// 2 1 S 5 2 G 5
// 7 2 S 1 10 S 5 12 G 5 G 1 G 10 S 6 14 G 5
x.set('2', 1);
x.set('1', 2);
x.set('S', 3);
x.set('2', 4);
x.set('G', 5);

console.log(x.get('S'));
console.log(x);
