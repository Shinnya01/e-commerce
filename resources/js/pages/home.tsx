import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ChevronRight, House, Shirt, Smartphone, Star, Volleyball } from 'lucide-react';

interface Product {
  id: number
  uuid: number
  name: string
  description: string
  price: string
  stock: number
  image: string
  category?: { name: string }
  sub_category?: { name: string }
  
}

interface Category{
    id: number
    name: string
    
}

// -------------------------------------------------------
// PAGE COMPONENT
// -------------------------------------------------------

export default function Home({ products, categories }: { products: Product[], categories: Category[]}) {

    const showProduct = (id: number) => {
        router.visit(`/products/${id}`)
    }
    
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col overflow-x-auto rounded-xl">
                {/* CATEGORIES */}
               <nav className='flex gap-4 mx-auto my-4'>
                    {categories.map((category) => (
                        <Button key={category.id} variant='link'>
                            {category.name}
                        </Button>
                    ))}
               </nav>
               
               <section className='relative bg-gradient-to-r bg-zinc-400 dark:bg-zinc-600 overflow-hidden'>
                    <PlaceholderPattern className="h-64 md:h-96 lg:h-132" />
               </section>

                {/* FEATURED PRODUCTS */}
                <section className="py-10 px-4">
                    <div className='max-w-7xl mx-auto'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-400">Featured Products</h2>
                            <Button variant="link" asChild className='p-0'>
                                <Link href="/products" className='flex items-center '>See all products <ChevronRight/></Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                            key={product.name}
                            className="rounded-2xl overflow-hidden shadow hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 bg-zinc-900"
                            onClick={() => showProduct(product.uuid)}
                            >
                            <div className="relative">
                                <img
                                src={product.image ?? 'https://images.unsplash.com/photo-1583224932378-4d1b37b90d5e?w=500'}
                                alt={product.name}
                                className="w-full h-80 object-cover bg-zinc-400 dark:bg-zinc-600"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-100 truncate">{product.name}</h3>
                                    <p className="text-gray-400 text-sm">
                                    {product.category 
                                        ? product.category.name + (product.sub_category ? ` • ${product.sub_category.name}` : "")
                                        :   "No Category"
                                    }
                                    </p>

                                </div>
                                <div className="text-gray-100 font-bold">${product.price}</div>
                                </div>

                                <div className="flex items-center text-yellow-400 text-sm">
                                <Star className="w-4 h-4 fill-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400" />
                                <Star className="w-4 h-4 text-gray-500" />
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
