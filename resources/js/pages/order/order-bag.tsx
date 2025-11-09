import { Head, router } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import Heading from '@/components/heading';
import { ChevronRight, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

export default function OrderBag() {
    const [selected, setSelected] = useState("cod")
    const options = [
        { value: "cod", label: "Cash on Delivery", info: "Pay when you receive your order." },
        { value: "gcash", label: "GCash", info: "Use your GCash wallet to pay securely." },
        { value: "maya", label: "Maya", info: "Pay instantly using Maya." },
    ]

    const handleCheckout = () => {
        router.visit(`/order/1`)
    }
    return (
        <AppLayout >
            <Head title="Order bag" />
            <div className='max-w-6xl w-full mx-auto py-6 '>
                
                <div className='grid grid-cols-3 gap-4'>
                    <div className="space-y-6 col-span-2">
                        <Heading title='My Bag'/>
                        <Card className='p-4'>
                            <CardTitle>My Address</CardTitle>
                            <Card className='p-4'>
                                <div className='grid grid-cols-[auto_1fr_auto] items-center gap-2'>
                                    <MapPin className='size-7'/>
                                    <div>
                                        <h3 className='font-semibold text-sm'>Carl Justin Carreon</h3>
                                        <h3 className='text-zinc-500 text-sm'>Lorem ipsum dolor sit amet </h3>
                                    </div>
                                    <Button variant="outline">Change</Button>
                                </div>
                            </Card>
                        </Card>
                        <Card className='p-4'>
                            <CardTitle>Payment Method</CardTitle>
                            <RadioGroup
                            value={selected}
                            onValueChange={(value) => setSelected(value)}
                            className="space-y-2"
                            >
                            {options.map(({ value, label, info }) => (
                                <Collapsible key={value} open={selected === value}>
                                <CollapsibleTrigger asChild>
                                    <div className="flex items-center justify-between w-full p-3 border rounded-lg hover:bg-accent cursor-pointer transition">
                                    <label htmlFor={value} className="text-left cursor-pointer flex-1">
                                        {label}
                                    </label>
                                    <RadioGroupItem value={value} id={value} />
                                    </div>
                                </CollapsibleTrigger>

                                <CollapsibleContent className="pl-3 text-sm text-gray-500 mt-2">
                                    {info}
                                </CollapsibleContent>
                                </Collapsible>
                            ))}
                            </RadioGroup>
                        </Card>
                        <Card className='p-4'>
                            <CardHeader className='p-0 space-y-2'>
                                <CardTitle className='font-medium'>Aling Bebang</CardTitle>
                                <CardDescription className='flex flex-row'>
                                    <div className='text-xs w-[10rem]'>
                                        <p>Delivery by:</p>
                                        <p>10-13 Nov</p>
                                    </div>
                                    <div className='text-xs'>
                                        <p>Estimated Shipping:</p>
                                        <p>php 149.00</p>
                                    </div>
                                </CardDescription>
                                <CardContent className='p-0 space-y-4'>
                                    {[...Array(5)].map((_, i) =>(
                                        <Card className='p-4 gap-2'>
                                            <div className='flex justify-between items-center'>
                                                <Checkbox className=''/>
                                                <Button variant="ghost" className='size-6'><X/></Button>
                                            </div>
                                            
                                            <div className='grid grid-cols-[auto_1fr] gap-4 '>
                                                <div className='flex-1'>
                                                    <PlaceholderPattern className='w-30 h-30 bg-amber-50 rounded-lg'/>
                                                </div>
                                                <div className='space-y-2'>
                                                    <p className='text-sm'>Nike | Blazer Low '77 Vintage Basketball Shoes</p>
                                                    <p className='text-xs'>Size: EU 44</p>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-2'>
                                                            <p className='text-sm'>Quantity:</p>
                                                            <Select>
                                                                <SelectTrigger className='w-20'>
                                                                    <SelectValue placeholder="1"/>
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value='1'>1</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <p className='font-medium text-sm'>Php 6,999.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                    
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className='space-y-4'>
                        <HeadingSmall title='Order summary'/>
                        <Card className='p-4 gap-4'>
                            <CardContent className='p-0 flex flex-col gap-4'>
                                <div className='flex justify-between font-bold text-sm'>
                                    <h3 className=''>Sub-total (3 items)</h3>
                                    <p>Php 12,855.00</p>
                                </div>
                                <Separator/>
                                <div>
                                    <h3 className='font-bold text-sm'>Total Saving</h3>
                                    <div className='flex justify-between text-sm text-zinc-400'>
                                        <h3 className=''>No Voucher Applied</h3>
                                        <p>Php 12,855.00</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-bold text-sm'>Shipping</h3>
                                    <div className='flex justify-between text-sm text-zinc-400'>
                                        <h3 className=''>From ALING BEBANG</h3>
                                        <p>Php 12,855.00</p>
                                    </div>
                                </div>

                                <Card className='p-4 bg-blue-900'>
                                    <div className='grid grid-cols-[1fr_auto] gap-2 items-center'>
                                        <CardHeader className='p-0'>
                                            <CardTitle className='text-sm'>Subscribe to Bebang membership</CardTitle>
                                            <CardDescription>
                                                Activate the toggle for 1-yr of Unlimited Free Shipping, Cashback on every order for only Php 500.00 Be a <strong>BEBANG</strong>  now
                                            </CardDescription>
                                        </CardHeader>
                                        <Switch/>
                                    </div>
                                </Card>

                                <Separator/>
                                <div className='flex justify-between font-bold text-sm'>
                                    <h3 className=''>Total <span className='text-zinc-400'>(Including TAX)</span></h3>
                                    <p>Php 12,855.00</p>
                                </div>

                                <Button 
                                onClick={() => handleCheckout()}
                                >Checkout</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
          
        </AppLayout>
    );
}
