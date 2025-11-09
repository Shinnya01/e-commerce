import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';
import Heading from '@/components/heading';
import { Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wishlist',
        href: '/wishlist',
    },
];

export default function WishList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wishlist" />

            <SettingsLayout>
                <div className="space-y-6">
                    <h1 className='flex gap-2 items-center'><Heart className='size-5'/> My Wishlist (1)</h1>
                    <div className='grid grid-cols-4'>
                        <Card className='p-2 rounded-lg h-full gap-4'>
                            <PlaceholderPattern className='w-full h-60 bg-amber-50'/>
                            <div className='p-0 m-0'>
                                <h3 className='font-semibold'>Jordan</h3>
                                <p className='truncate text-sm text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nihil!</p>
                            </div>
                            <div className=''>
                                <p className='font-semibold text-base'>Php 4,300.00</p>
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
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
