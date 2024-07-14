import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// const products = [
//   { id: 1, name: 'Cotton Fabric', description: 'High-quality cotton fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
//   { id: 2, name: 'Linen Fabric', description: 'Luxurious linen fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
//   { id: 3, name: 'Silk Fabric', description: 'Premium silk fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
//   { id: 4, name: 'Cotton Fabric', description: 'High-quality cotton fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
//   { id: 5, name: 'Linen Fabric', description: 'Luxurious linen fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
//   { id: 6, name: 'Silk Fabric', description: 'Premium silk fabric', pictures:["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"] },
// ];
type Product = {
  id: number;
  name: string;
  description: string;
  pictures:[]
}
export default function ProductsSectionContent2({products} :{
  products:Product[]
}) {
  return (
    <section>
      <div className="scrollbar2 overflow-scroll mx-auto max-w-screen-xl h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <Link href="#" className="group relative block w-72 h-80">
                <div className='relative h-full'>
                  <Image
                    width={500}
                    height={500}
                    src={product.pictures[0]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <Image
                    width={500}
                    height={500}
                    src={product.pictures[1]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
                  <p className="text-xl font-bold text-white sm:text-2xl">{product.name}</p>
                  <div className="mt-20 sm:mt-24 lg:mt-32">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
