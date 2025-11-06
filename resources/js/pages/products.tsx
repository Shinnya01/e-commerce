import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldSet } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import { Field } from "@headlessui/react";
import { Head } from "@inertiajs/react";

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

export default function Products({ products }:{ products: Product[] }) {
    return (
        <AppLayout>
            <Head title="Shop All Products" />

            {/* Header */}
            <div className="bg-zinc-800 text-white py-16 px-6 text-center space-y-5">
                <h1 className="font-bold text-4xl leading-tight">Shop All Products</h1>
                <p className="max-w-2xl mx-auto text-gray-300 text-sm leading-relaxed">
                    Discover our complete collection of premium products from top brands worldwide. 
                    Find exactly what you're looking for with our advanced filtering options.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl  mx-auto flex gap-8 px-6 py-10">
                
                {/* Filters Sidebar */}
                <aside className="w-64 space-y-6 sticky top-20 self-start h-fit">
                    <Card className="p-6 space-y-4">
                        {/* Category */}
                        <div>
                            <h2 className="font-light text-md mb-3">Category</h2>
                            <div className="flex flex-col gap-2">
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Electronic
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Fashion 
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Home & Garden
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Sports 
                                </Field>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h2 className="font-light text-md mb-3">Price Range</h2>
                            <div className="flex flex-col gap-2">
                                <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Under $50</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">$50 - $100</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">$100 - $200</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">$200 - $500</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">Over $500</Label>
                                </div>
                                </RadioGroup>
                            </div>
                        </div>

                        {/* SELLERS */}
                        <div>
                            <h2 className="font-light text-md mb-3">Sellers</h2>
                            <div className="flex flex-col gap-2">
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Monay
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Bebang
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Natoy
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> John Doe 
                                </Field>
                            </div>
                        </div>

                        {/* RATING */}
                        <div>
                            <h2 className="font-light text-md mb-3">Customer Rating</h2>
                            <div className="flex flex-col gap-2">
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Monay
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Bebang
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> Natoy
                                </Field>
                                <Field className='flex items-center gap-2 text-sm'>
                                    <Checkbox/> John Doe 
                                </Field>
                            </div>
                        </div>
                    </Card>
                </aside>

                {/* Product Grid */}
                <section className="flex-1 min-w-5xl">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-gray-500">Showing 1-12 of 78 products</p>
                        <Select defaultValue="bestSelling">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="bestSelling">Best Selling</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="lowToHigh">Low to High</SelectItem>
                                <SelectItem value="highToLow">High to Low</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition py-0">
                                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                                    {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                    ) : (
                                    <span className="text-gray-400 text-sm">No image</span>
                                    )}
                                </div>
                                <div className="p-4 space-y-2">
                                    
                                    <p className="text-xs text-gray-500">
                                    {product.category 
                                        ? product.category.name + (product.sub_category ? ` • ${product.sub_category.name}` : "")
                                        :   "No Category"
                                    }
                                    </p>
                                    
                                    <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                                    <p className="text-sm text-yellow-500">★★★★★ (128 reviews)</p>
                                    <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">${product.price}</span>
                                    <Button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-700">
                                        Add to Cart
                                    </Button>
                                    </div>
                                </div>
                                </Card>

                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
