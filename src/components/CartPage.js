import React from 'react';

const CartPage = () => {
  // Get the cart items from local storage or an empty array if not present
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
