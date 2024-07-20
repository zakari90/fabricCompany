"use client"
import React, { useState, useEffect, useRef } from 'react';
import './productDetails.css';
import Image from 'next/image';
import WhatsAppLink from '@/components/whatsAppComponents';

interface Product {
  id: number;
  name: string;
  description: string;
  pictures: string[];
}

const Colors = ({ colors }) => {
  return (
    <div className='colors'>
      {colors.map((color, index) => (
        <button key={index} style={{ background: color }}></button>
      ))}
    </div>
  );
};

const DetailsThumb = ({ images, handleImgChange, smImgsRef }) => {
  return (
    <div className="thumb overflow-auto" ref={smImgsRef}>
      {images.map((img, index) => (
        <Image
          src={img}
          height={400}
          width={400}
          alt="small img"
          key={index}
          onClick={() => handleImgChange(index)}
        />
      ))}
    </div>
  );
};

export default function ProductDetails({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const smImgsRef = useRef(null);

  const handleImgChange = (newIndex) => {
    setIndex(newIndex);
    const images = smImgsRef.current.children;
    // remove all img active class 
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    // set current img active class 
    images[newIndex].className = "active";
  };

  // initial img set active class 
  useEffect(() => {
    smImgsRef.current.children[index].className = "active";
  }, [index]);

  return (
    <section className='app'>
      <div key={product.id} className="details">
        <div className='large-img-wrapper'>
          <Image
            height={400}
            width={400}
            src={product.pictures[index]}
            alt="largeImg"
            className='large-img'
          />
        </div>

        <div className='box'>
          <div className='row'>
            <h2>{product.name}</h2>
            {/* <span>{price} $</span> */}
          </div>
          {/* colors components  */}
          {/* <Colors colors={colors}/> */}
          {/* <p>{description}</p> */}
          <p>{product.description}</p>
          {/* small images components */}
          <DetailsThumb images={product.pictures} handleImgChange={handleImgChange} smImgsRef={smImgsRef} />
          <div className='py-4'>
            <WhatsAppLink productName={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

const p = {
  id: 1,
  name: "Cotton",
  description: "Discover our high-quality cotton fabric, perfect for everyday wear and home textiles. Renowned for its softness, breathability, and durability, this fabric is ideal for creating comfortable clothing, cozy bedding, and stylish home decor. Experience the natural comfort and versatility of our premium cotton fabric, a staple for any fabric enthusiast.",
  pictures: ["/images/cotton/cotton1.jpg", "/images/cotton/cotton2.jpg", "/images/cotton/cotton3.jpg", "/images/cotton/cotton-plant.jpg"]
}
