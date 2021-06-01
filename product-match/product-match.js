// Flag for Product Availability
// Should easily able to add new properties to PRODUCT
// Should able to render new properties to screen
// should able to remove the Product property
// For Comaparison user should able to apply the filters.
// dfgvedtbretd

var productList = [
  {
    id: 1,
    name: 'Samsung 42 LED TV',
    price: 'Rs. 42,000',
    description: 'Latest LED TV in market with 120 degree curved.',
    specs: 'TV, Remote, Speaker, Bluetooth connector, VGA cable',
    reviews: 'Top Quality Product'
  },
  {
    id: 2,
    name: 'Sony 42 LED TV',
    price: 'Rs. 60,000',
    description: 'Latest LED TV in market with 120 degree curved.',
    specs: 'TV, Remote, Speaker, Bluetooth connector, VGA cable',
    reviews: 'Value for money'
  },
  {
    id: 3,
    name: 'Vue 42 LED TV',
    price: 'Rs. 30,000',
    description: 'Latest LED TV in market with 120 degree curved.',
    specs: 'TV, Remote, Speaker, Bluetooth connector, VGA cable',
    reviews: 'Top Quality Product, Value for money'
  }
];
var compareList = [productList[0]];


function generateListingProduct(product) {
  return `<div class="default-product-spec">
    <div>Product Name</div>
    <div>Description</div>
    <div>Price</div>
    <div>Specs</div>
    <div>Top Reviews</div>
  </div>
  <div class="product">
    <div class="product-name"">` + product.name + `</div>
    <div class="product-description">` + product.description + `</div>
    <div class="product-price">` + product.price + `</div>
    <div class="product-specs">` + product.specs + `</div>
    <div class="product-reviews">` + product.reviews + `</div>
  </div>
  <div class="product-action">
    <button type="button" name="button"onclick="addProductForCompare(` + product.id + `)">ADD PRODUCT</button>
  </div>`;
}

function addProductForCompare(productId) {
  var selectedproduct = productList.filter(product => product.id === productId);
  var isPresent = compareList.filter(product => product.id === productId);

  if (isPresent.length === 0) {
    compareList.push(selectedproduct[0]);

    var compareProductElem = document.getElementById('product-compare');
    compareProductElem.innerHTML = '';
    renderCompareProducts();
  }
}

function renderProductList() {
  var productListElem = document.getElementById('product-listing');

  productList.forEach(product => {
    var tmpElem = document.createElement('div');
    tmpElem.id= "product-list-" + product.id;
    tmpElem.className = 'product-list';
    tmpElem.innerHTML = generateListingProduct(product);
    productListElem.appendChild(tmpElem);
  });
}

function removeProductClick(id) {
  console.log('Remove Product', id);
  var tmpElem = document.getElementById('product-item-' + id);
  tmpElem.parentNode.removeChild(tmpElem);
}

function generateCompareProduct(product) {
  return `<div class="product-name" id="product-item-` + product.id + `">` + product.name + `</div>
    <div class="product-description">` + product.description + `</div>
    <div class="product-price">` + product.price + `</div>
    <div class="product-specs">` + product.specs + `</div>
    <div class="product-reviews">` + product.reviews + `</div>
    <div class="product-remove">
      <button type="button" name="button" onclick="removeProductClick(` + product.id + `)">REMOVE PRODUCT</button>
    </div>`;
}

function renderCompareProducts() {
  var compareProductElem = document.getElementById('product-compare');

  compareList.forEach(product => {
    var tmpElem = document.createElement('div');
    tmpElem.id= "product-item-" + product.id;
    tmpElem.className = 'product-item';
    tmpElem.innerHTML = generateCompareProduct(product);
    compareProductElem.appendChild(tmpElem);
  });
}

renderProductList();
renderCompareProducts();
