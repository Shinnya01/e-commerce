import AppLayoutTemplateAdmin from '@/layouts/app/app-sidebar-layout';
import AppLayoutTemplateUser from '@/layouts/app/app-header-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs }: AppLayoutProps) {
    const { props } = usePage<{ auth: { user: { role: string } } }>();
    const role = props.auth?.user?.role;

    if (role === 'admin' || role === 'seller') {
        return (
            <AppLayoutTemplateAdmin breadcrumbs={breadcrumbs}>
                {children}
            </AppLayoutTemplateAdmin>
        );
    }

    return (
        <AppLayoutTemplateUser breadcrumbs={breadcrumbs}>
            {children}
        </AppLayoutTemplateUser>
    );
}