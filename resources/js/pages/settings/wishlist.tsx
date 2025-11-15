import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import Heading from '@/components/heading';
import { Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
1
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wishlist',
        href: '/wishlist',
    },
];

interface Wish {
    id: number;
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image?: string; // optional
    };
}


export default function WishList( {wishes}: {wishes: Wish[]}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wishlist" />

            <SettingsLayout>
                <div className="space-y-6">
                    <h1 className='flex gap-2 items-center'><Heart className='size-5'/> My Wishlist (1)</h1>
                    <div className='grid grid-cols-3 gap-2'>
                        {wishes.map((wish) => (
                            <Card className='p-2 rounded-lg h-full gap-4'>
                                <PlaceholderPattern className='w-full h-60 bg-amber-50'/>
                                <div className='p-0 m-0'>
                                    <h3 className='font-semibold'>{wish.product.name}</h3>
                                    <p className='truncate text-sm text-zinc-500'>{wish.product.description}</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold text-base'>Php {wish.product.price}</p>
                                </div>
                                <div>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a Size"></SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="apple">SM</SelectItem>
                                                <SelectItem value="banana">MD</SelectItem>
                                                <SelectItem value="blueberry">LG</SelectItem>
                                                <SelectItem value="grapes">XL</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button>Add to bag</Button>
                            </Card>
                        ))}
                        
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
