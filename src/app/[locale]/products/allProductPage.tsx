import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { title } from 'process';
import { Products } from '@/components/productsSection';

const products = [
  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },
  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },  {
    name: 'Product Name',
    description: 'Product Description',
    price: '$99.99',
    image: '/placeholder.svg',
  },
  {
    name: 'Another Product',
    description: 'Product Description',
    price: '$49.99',
    image: '/placeholder.svg',
  },
  {
    name: 'Awesome Product',
    description: 'Product Description',
    price: '$79.99',
    image: '/placeholder.svg',
  },
  {
    name: 'Fantastic Product',
    description: 'Product Description',
    price: '$59.99',
    image: '/placeholder.svg',
  },
  // Add more products as needed
];

export default function AllProductPage({locale, products, title} :
  Products) {
    const domaine = "http://localhost:3000";
  return (
    <section id="prodcuts" 
    className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="py-2 text-2xl font-bold sm:text-3xl">{title}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <Link href={`${domaine}/${locale}/products/${product.id}`}
              className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={product.pictures[0]}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">{product.name}</h3>
                <small className="text-sm leading-none text-muted-foreground">{product.description}</small>
                {/* <h4 className="font-semibold">{product.price}</h4> */}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
