import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, ChevronLeft, HeartIcon, ShoppingCartIcon, Star } from "lucide-react";


export default function showProduct({product}: {product: any}){
    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto w-full py-6 space-y-6">
                <Button variant="link" className="pl-0" onClick={() => window.history.back()}>
                    <div className="flex items-center gap-2"><ArrowLeft/> Back</div>
                </Button>

                <Card className="bg-zinc-900 w-full h-auto p-0">
                    <div className="grid grid-cols-2 p-4 gap-8">
                        {/* PRODUCT IMAGES */}
                        <div className="space-y-4">
                            <PlaceholderPattern className="bg-zinc-600 w-full h-100 rounded-lg"/>
                            <div className="flex gap-4">
                                <PlaceholderPattern className="bg-zinc-600 w-30 h-30 rounded-lg"/>
                                <PlaceholderPattern className="bg-zinc-600 w-30 h-30 rounded-lg"/>
                                <PlaceholderPattern className="bg-zinc-600 w-30 h-30 rounded-lg"/>
                            </div>
                            
                        </div>

                        {/* PRODUCT DETAILS */}
                        <div className="space-y-4 dark:text-white">
                            <h1 className="font-bold text-3xl">{product.name}</h1>
                            <h2 className= "font-bold text-3xl">${product.price}</h2>
                            {/* RATINGS */}
                            <div className="mt-2 flex items-center gap-2 sm:mt-0">
                                <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                                ))}
                                </div>
                                <p className="text-muted-foreground text-sm">(5.0)</p>
                                <Link href="#" className="text-sm hover:underline">
                                    345 Reviews
                                </Link>
                            </div>
                            {/* ACTION BUTTONS */}
                            <div className="flex items-center gap-2">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Add to Cart
                                </Button>
                                <Button variant="default" >
                                    Buy now
                                </Button>
                                <Button className="border border-zinc-300 text-black">
                                    <HeartIcon/>
                                </Button>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-zinc-00">{product.description}</p>
                        </div>
                    </div>
                </Card>

                <Card className="bg-zinc-900 w-full h-auto p-8 dark:text-white">
                    <h1 className=" text-3xl font-bold">Product Specifications</h1>

                    {/* CARE */}
                    <div className="grid grid-cols-2">
                        <div className="space-y-4">
                            <h1 className="font-medium">Material & Care</h1>
                            <ul className="list-inside list-disc">
                                <li>100% Premium Cotton Blend</li>
                                <li>Machine Washable</li>
                                <li>Tumble Dry Low</li>
                                <li>Do Not Bleach</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium">Size & Fit</h1>
                            <ul className="list-inside list-disc">
                                <li>Available in XS - XXL</li>
                                <li>Regular Fit</li>
                                <li>7-inch Inseam</li>
                                <li>Elastic Waistband</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                <Card className="bg-zinc-900 w-full h-auto p-8 dark:text-white">
                    <h1 className=" text-3xl font-bold">Customer Reviews</h1>

                    <div className="space-y-8">
                        <div className="space-y-4">            
                            <div className="flex gap-2 items-center">
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold">Sarah Mitchell</div>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-zinc-500 text-sm ml-2">2 days ago</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                Absolutely love these shorts! The fabric is incredibly soft and breathable. Perfect for both workouts and casual wear. The fit is exactly as described.
                            </div>
                        </div>

                        <Separator className="bg-zinc-300"/>

                        <div className="space-y-4">            
                            <div className="flex gap-2 items-center">
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold">Marcus Johnson</div>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-zinc-500 text-sm ml-2">2 days ago</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                Absolutely love these shorts! The fabric is incredibly soft and breathable. Perfect for both workouts and casual wear. The fit is exactly as described.
                            </div>
                        </div>

                        <Separator className="bg-zinc-300"/>
                        
                    </div>
                </Card>
            </div>
        </AppLayout>
    )
}