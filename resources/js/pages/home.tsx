import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { House, Shirt, Smartphone, Star, Volleyball } from 'lucide-react';

const categories = [
      {
    name: "Electronics",
    icon: Smartphone,
    description: "Latest gadgets & tech",
  },
  {
    name: "Fashion",
    icon: Shirt,
    description: "Trendy clothing & accessories",
  },
  {
    name: "Home & Garden",
    icon: House,
    description: "Furniture & décor",
  },
  {
    name: "Sports",
    icon: Volleyball,
    description: "Fitness & outdoor gear",
  },
];

interface Product {
  id: number
  name: string
  description: string
  price: string
  stock: number
  image: string
  category?: { name: string }
  sub_category?: { name: string }
}

// -------------------------------------------------------
// PAGE COMPONENT
// -------------------------------------------------------

export default function Home({ products }: { products: Product[]}) {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col overflow-x-auto rounded-xl">
                {/* CATEGORIES */}
               <nav className='flex gap-4 mx-auto my-4'>
                    <a href="#" className='hover:text-blue-400 text-sm text-gray-300'>Electronics</a>
                    <a href="#" className='hover:text-blue-400 text-sm text-gray-300'>Fashion</a>
                    <a href="#" className='hover:text-blue-400 text-sm text-gray-300'>Home & Garden</a>
                    <a href="#" className='hover:text-blue-400 text-sm text-gray-300'>Sports</a>
               </nav>
               
               <section className='relative bg-gradient-to-r from-blue-50 to-indigo-100 overflow-hidden'>
                    <PlaceholderPattern className="h-64 md:h-96 lg:h-132" />
               </section>

                {/* FEATURED PRODUCTS */}
                <section className="py-10 px-4">
                    <div className='max-w-7xl mx-auto'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Featured Products</h2>
                            <Button variant="link" asChild>
                                <Link href="/product">View All</Link>
                            </Button>
                        </div>

                        <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 ">
                            {products.map((product) => (
                            <div
                                key={product.name}
                                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <div className="relative">
                                <img
                                    src='https://images.unsplash.com/photo-1583224932378-4d1b37b90d5e?w=500'
                                    alt={product.name}
                                    className="w-full h-56 object-cover"
                                />
                                </div>

                                <div className="p-4 text-left">
                                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                                <h3 className="font-extralight text-gray-800 mb-1 text-sm">{product.description}</h3>
                                <div className="flex items-center text-yellow-400 text-sm mb-1">
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-gray-300" />
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className='text-black'>
                                        <span className="font-bold text-lg">{product.price}</span>
                                    </div>
                                    <button className="bg-blue-500 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-blue-600">
                                    Add to Cart
                                    </button>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                
                </section>
            </div>
        </AppLayout>
    );
}
