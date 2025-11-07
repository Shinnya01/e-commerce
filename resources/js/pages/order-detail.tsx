import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { ChevronLeft, CreditCard, IdCardIcon, Pen, PencilLineIcon, Printer, SquarePen } from "lucide-react";

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
                </Card>
                

            </div>
        </AppLayout>
    )
}