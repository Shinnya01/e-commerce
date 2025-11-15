import AppLayoutTemplateAdmin from '@/layouts/app/app-sidebar-layout';
import AppLayoutTemplateUser from '@/layouts/app/app-header-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, type ReactNode } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs }: AppLayoutProps) {
    const { props } = usePage<{
        auth: { user: { role: string } },
        flash: { success?: string, error?: string, info?: string }
    }>();
    
    const role = props.auth?.user?.role;

    useEffect(() => {
    if (props.flash?.success) {
        toast.success(props.flash.success, { id: 'success-toast' });
    }
    if (props.flash?.error) {
        toast.error(props.flash.error, { id: 'error-toast' });
    }
    if (props.flash?.info) {
        toast.info(props.flash.info, { id: 'info-toast' });
    }
    }, [props.flash?.success, props.flash?.error]);


    if (role === 'admin' || role === 'seller') {
        return (
            <AppLayoutTemplateAdmin breadcrumbs={breadcrumbs}>
                {children}
                <Toaster position='top-right' richColors closeButton/>
            </AppLayoutTemplateAdmin>
        );
    }

    return (
        <AppLayoutTemplateUser breadcrumbs={breadcrumbs}>
            {children}
            <Toaster/>
        </AppLayoutTemplateUser>
    );
}