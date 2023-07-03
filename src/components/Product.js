import React, { useState } from 'react';
import './Product.css'

const productsData = [
  {

    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'This is the first product',
    imageUrl: 'https://example.com/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },
  // Add more products here

  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },



  {
    id: 4,
    name: 'Product 4',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },



  {
    id: 5,
    name: 'Product 5',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },



  {
    id: 6,
    name: 'Product 6',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },


  {
    id: 7,
    name: 'Product 7',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },


  {
    id: 8,
    name: 'Product 8',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },


  {
    id: 9,
    name: 'Product 9',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },


  {
    id: 10,
    name: 'Product 10',
    price: 19.99,
    description: 'This is the second product',
    imageUrl: 'https://example.com/product2.jpg',
  },






];

const ITEMS_PER_PAGE = 8;




const ProductBrowser = () => {
    const [products, setProducts] = useState(productsData);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleFilter = (searchTerm) => {
      const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
      setCurrentPage(1);
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const getTotalPages = () => Math.ceil(products.length / ITEMS_PER_PAGE);
  
    const handleBuy = (productId) => {
      // Find the product by ID from the list of products
      const product = products.find((product) => product.id === productId);
  
      // Get the existing cart items from local storage or an empty array if not present
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
      // Add the product to the cart
      existingCartItems.push(product);
  
      // Store the updated cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  
      // Show a message to the user that they have bought the product
      alert(`You have bought ${product.name}!`);
    };
  
    const paginatedProducts = products.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for products"
          onChange={(e) => handleFilter(e.target.value)}
        />
  
        {paginatedProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '150px', maxHeight: '150px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
  
            {/* "Buy This" button */}
            <button onClick={() => handleBuy(product.id)}>Buy This</button>
          </div>
        ))}
  
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {Array.from({ length: getTotalPages() }).map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} style={{ margin: '5px' }}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };



export default ProductBrowser;
