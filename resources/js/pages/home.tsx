import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
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

export default function Home() {
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
                            <a href="#" className="text-blue-500 text-sm hover:underline">
                            View All
                            </a>
                        </div>

                        <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 ">
                            {[
                            {
                                name: "Premium Wireless Headphones",
                                image: "https://images.unsplash.com/photo-1583224932378-4d1b37b90d5e?w=500",
                                price: "$199.99",
                                oldPrice: "$249.99",
                                reviews: "128 reviews",
                            },
                            {
                                name: "Smart Fitness Watch",
                                image: "https://images.unsplash.com/photo-1603791452906-b6f6bca8a511?w=500",
                                price: "$299.99",
                                reviews: "89 reviews",
                            },
                            {
                                name: "Designer Leather Handbag",
                                image: "https://images.unsplash.com/photo-1618354691547-5b1d8b289e1a?w=500",
                                price: "$149.99",
                                oldPrice: "$199.99",
                                reviews: "156 reviews",
                                sale: true,
                            },
                            {
                                name: "Professional Running Shoes",
                                image: "https://images.unsplash.com/photo-1528701800489-20be2b1c2e4c?w=500",
                                price: "$129.99",
                                reviews: "203 reviews",
                            },
                            {
                                name: "Professional Running Shoes",
                                image: "https://images.unsplash.com/photo-1528701800489-20be2b1c2e4c?w=500",
                                price: "$129.99",
                                reviews: "203 reviews",
                            },
                            ].map((product) => (
                            <div
                                key={product.name}
                                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <div className="relative">
                                {product.sale && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                                    Sale
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-56 object-cover"
                                />
                                </div>

                                <div className="p-4 text-left">
                                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                                <div className="flex items-center text-yellow-400 text-sm mb-1">
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-gray-300" />
                                    <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className='text-black'>
                                        <span className="font-bold text-lg">{product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 text-sm line-through ml-2">
                                            {product.oldPrice}
                                            </span>
                                        )}
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
