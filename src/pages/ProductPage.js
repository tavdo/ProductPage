import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import '../styles/ProductPage.css';

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';
import image12 from '../images/12.jpg';
import image13 from '../images/13.jpg';
import image14 from '../images/14.jpg';
import image15 from '../images/15.jpg';
import image16 from '../images/16.jpg';
import image17 from '../images/17.jpg';
import image18 from '../images/18.jpg';
import image19 from '../images/19.jpg';
import image20 from '../images/20.jpg';


const products = [
  { id: 1, image: image1, price: 299, description: 'Samsung Galaxy A06 A065FD 4/64GB Black' },
  { id: 2, image: image2, price: 1349, description: 'OnePlus Nord 4 12/256GB Obsidian Midnight' },
  { id: 3, image: image3, price: 299, description: 'Realme C61 NFC 6/128GB Dark Green' },
  { id: 4, image: image4, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Yellow' },
  { id: 5, image: image5, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Pink' },
  { id: 6, image: image6, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Blue' },
  { id: 7, image: image7, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Navy' },
  { id: 8, image: image8, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Mint' },
  { id: 9, image: image9, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Navy' },
  { id: 10, image: image10, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Mint' },
  { id: 11, image: image11, price: 299, description: 'Samsung Galaxy A06 A065FD 4/64GB Black' },
  { id: 12, image: image12, price: 1349, description: 'OnePlus Nord 4 12/256GB Obsidian Midnight' },
  { id: 13, image: image13, price: 299, description: 'Realme C61 NFC 6/128GB Dark Green' },
  { id: 14, image: image14, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Yellow' },
  { id: 15, image: image15, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Pink' },
  { id: 16, image: image16, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Blue' },
  { id: 17, image: image17, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Navy' },
  { id: 18, image: image18, price: 2649, description: 'Samsung Galaxy Flip 6 F741B 5G 12/256GB Mint' },
  { id: 19, image: image19, price: 4499, description: 'Samsung Galaxy Fold 6 F956B/DS 5G 12/256GB Navy' },
  { id: 20, image: image20, price: 1349, description: 'OnePlus Nord 4 12/256GB Obsidian Midnight' },

];

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;  // Show 10 products per page

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-page">
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductPage;
