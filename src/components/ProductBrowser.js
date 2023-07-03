import React, { useState } from 'react';

const productsData = [
  // Products data array remains the same
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
          {/* Product details */}
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
