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
import { Select, SelectTrigger } from '@/components/ui/select';

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
                        <Card className='p-2 rounded-lg space-y-0 h-full gap-2'>
                            <PlaceholderPattern className='w-full h-60 bg-amber-50'/>
                            <div className='p-0 m-0'>
                                <h3 className='font-semibold'>Jordan</h3>
                                <p className='truncate text-sm text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nihil!</p>
                            </div>
                            <div className='my-1'>
                                <p className='font-semibold text-base'>Php 4,300.00</p>
                            </div>
                            <div>
                                <Select>
                                </Select>
                            </div>
                        </Card>
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
