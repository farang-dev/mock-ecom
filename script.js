// Track Product Views
function viewProduct(productName) {
  dataLayer.push({
    event: 'product_view',
    ecommerce: {
      items: [{
        item_name: productName
      }]
    }
  });
  alert(`Viewed ${productName}`);
}

// Track Add to Cart
function addToCart(productName) {
  dataLayer.push({
    event: 'add_to_cart',
    ecommerce: {
      items: [{
        item_name: productName
      }]
    }
  });
  alert(`Added ${productName} to cart`);
}

// Track Checkout
function checkout() {
  dataLayer.push({
    event: 'purchase',
    ecommerce: {
      transaction_id: 'T12345',
      value: 30.00,
      currency: 'USD',
      items: [{
        item_name: 'Product 1',
        price: 10.00,
        quantity: 1
      },
      {
        item_name: 'Product 2',
        price: 20.00,
        quantity: 1
      }]
    }
  });
  alert('Checkout completed');
}
