import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { CheckCircle, ChevronLeft, CircleCheck, CreditCard, IdCardIcon, Pen, PencilLineIcon, Printer, SquarePen, TruckIcon } from "lucide-react";

export default function orderDetail(){
    return (
        <AppLayout>
            <Head title="Order #123"/>
            <div className="max-w-5xl mx-auto w-full py-6 space-y-6">
                {/* ACTION BUTTONS */}
                <div className="flex justify-between">
                    <Button variant="outline" className="pl-0" onClick={() => window.history.back()}>
                        <ChevronLeft/>
                    </Button>
                    <div className="space-x-2">
                        <Button variant="outline">
                            <Printer/> Print
                        </Button>
                        <Button variant="default">
                            <Pen/> Edit
                        </Button>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Order ORD-12345</CardTitle>
                            <CardDescription>
                            Placed on 2025-04-15
                            </CardDescription>
                        </CardHeader>
                        <Separator/>
                        <CardContent className="space-y-2">
                        
                            <h3 className="font-medium">Customer Information</h3>
                            <p className="text-zinc-500 text-sm">Alice Johnson</p>
                            <p className="text-zinc-500 text-sm">alice@gmail.com</p>
                            <p className="text-zinc-500 text-sm">123 Main St, Anytown, AN 12345</p>

                            
                            <Card className="p-4 bg-zinc-900">
                                <div className="grid grid-cols-[1fr_auto]">
                                    <div>
                                        <CardTitle>Payment Method</CardTitle>
                                        <CardDescription className="flex gap-2 items-center"><CreditCard className="size-5"/> Visa ending in **** 1234</CardDescription>
                                    </div>
                                    <Button variant="outline">
                                        <SquarePen/>
                                    </Button>
                                </div>
                            </Card>

                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 ">
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>$101.97</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p>$10.00</p>
                            </div>
                            <Separator/>
                            <div className="font-medium flex justify-between">
                                <p>Total</p>
                                <p>$111.97</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="p-4">
                    <CardTitle>Delivery Status</CardTitle>
                    <div className="space-y-2">
                        <div className="flex justify-between text-white text-xs">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-green-900 rounded-full">
                                    <CheckCircle className="size-5"/>
                                </div>
                                <p>Processing</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-green-900 rounded-full">
                                    <TruckIcon className="size-5"/>
                                </div>
                                <p>Shipped</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-zinc-900 rounded-full">
                                    <TruckIcon className="size-5"/>
                                </div>
                                <p>Out for delivery</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-zinc-900 rounded-full">
                                    <CircleCheck className="size-5"/>
                                </div>
                            <p>Delivered</p>
                            </div>

                        </div>
                        {/* 0, 3, 33.5, 65.5, 100*/}
                        <Progress value={33.5} className="transition ease-in-out"/>
                        <div className="mt-4 space-x-2">
                            <Badge className="bg-blue-500/30 border border-blue-500 text-white">
                                Shipped
                            </Badge>
                            <span className="text-xs text-zinc-500">on December 23, 2024</span>
                        </div>
                    </div>
                </Card>
                <Card className="py-4">
                    <CardHeader>
                        <CardTitle>Order Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-[4fr_1fr_1fr_2fr] py-2">
                            <CardDescription>Product</CardDescription>
                            <CardDescription className="text-center">Quantity</CardDescription>
                            <CardDescription className="text-center">Price</CardDescription>
                            <CardDescription className="text-right">Total</CardDescription>
                        </div>
                        <Separator/>
                        {[...Array(5)].map((_,i) =>(
                            <div className="space-y-1">
                                <div className="grid grid-cols-[4fr_1fr_1fr_2fr] py-4 items-center">
                                    <div className="flex gap-2 items-center">
                                        <PlaceholderPattern className="w-15 h-15 bg-zinc-300 rounded-lg"/>
                                        <p>Hoodie</p>
                                    </div>
                                    <p className="text-center">12</p>
                                    <p className="text-center">12</p>
                                    <p className="text-right">12</p>
                                </div>
                                <Separator/>
                            </div>
                        ))}
                        
                    </CardContent>
                </Card>

            </div>
        </AppLayout>
    )
}