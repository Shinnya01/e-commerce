import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';
import Heading from '@/components/heading';
import { Bell, Heart, Lock, ShoppingBag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Select, SelectTrigger } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wishlist',
        href: '/notification',
    },
];

export default function WishList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wishlist" />

            <SettingsLayout>
                <div className="space-y-6">
                    <div className='flex justify-between items-center'>
                        <h1 className='flex gap-2 items-center'><Bell className='size-5'/> Notification</h1>
                        <Button variant="ghost">
                            Mark all as read
                        </Button>
                    </div>
                    <div className='space-y-4 max-h-180 overflow-y-auto'>
                        {[...Array(20)].map((_,i) => (
                            <Card className="p-4">
                                <div className='grid grid-cols-[auto_1fr] gap-2 items-start'>
                                    <div className='bg-green-300 p-3 rounded-full'>
                                        <Lock className='text-green-700 size-5'/>
                                    </div>
                                    <div className='text-white space-y-2'>
                                        <h3 className='font-semibold'>Your order is placed</h3>
                                        <p className='text-sm text-zinc-400'>Your order #ORD-2024-001 for Nike Air Max 270 has been successfully placed and is being processed.</p>
                                        <p className='mt-4 text-xs text-zinc-500'>2 hours ago</p>
                                    </div>
                                </div>
                                
                            </Card>

                        ))}
                        
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
