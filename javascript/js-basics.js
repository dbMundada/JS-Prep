Object.assign(target, ...sources)

/* ---------- Deep Copy ----------------
  For deep cloning, we need to use other alternatives because Object.assign()
  copies property values. If the source value is a reference to an object,
  it only copies that reference value.

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);

  // Nested Properties get updated
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
*/

/* ---------------Merging objects with same properties----------------
  var o1 = { a: 1, b: 1, c: 1 };
  var o2 = { b: 2, c: 2 };
  var o3 = { c: 3 };

  var obj = Object.assign({}, o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  The properties are overwritten by other objects that have the same
  properties later in the parameters order.
*/
