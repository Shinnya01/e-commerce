import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { cn, isSameUrl, resolveUrl } from '@/lib/utils';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BellIcon, BookOpen, Clock, Folder, Heart, HouseIcon, LayoutGrid, Menu, Search, Shirt, ShoppingCart, User, X } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';
import { edit } from '@/routes/profile';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { PlaceholderPattern } from './ui/placeholder-pattern';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/',
        icon: HouseIcon,
    },
    {
        title: 'Products',
        href: '/products',
        icon: Shirt,
    },
    {
        title: 'Wishlist',
        href: '/wishlist',
        icon: Heart,
    },
    {
        title: 'Cart',
        href: '/order',
        icon: ShoppingCart,
    },
    {
        title: 'Account',
        href: edit(),
        icon: User,
    },
    {
        title: 'Notification',
        href: '/notification',
        icon: BellIcon,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const page = usePage<SharedData>();

    const { auth, cart } = page.props;
 
    const getInitials = useInitials();
    return (
        <>
            <div className="border-b border-sidebar-border/80 sticky top-0 z-30 bg-sidebar/95 backdrop-blur-sm">
                <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2 h-[34px] w-[34px]"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation Menu
                                </SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && (
                                                        <Icon
                                                            iconNode={item.icon}
                                                            className="h-5 w-5"
                                                        />
                                                    )}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            {rightNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={resolveUrl(item.href)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && (
                                                        <Icon
                                                            iconNode={item.icon}
                                                            className="h-5 w-5"
                                                        />
                                                    )}
                                                    <span>{item.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {auth.user.role === 'user' ? (
                        <Link
                        href="/"
                        prefetch
                        className="flex items-center space-x-2"
                        >
                            <AppLogo />
                        </Link>
                    ) : (
                        <Link
                        href={dashboard()}
                        prefetch
                        className="flex items-center space-x-2"
                        >
                            <AppLogo />
                        </Link>
                    ) }
                    
                        
                    <InputGroup className='hidden lg:flex max-w-xl mx-auto rounded-full'>
                        <InputGroupInput placeholder="Search products, brands and more... " />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>

                    {/* Desktop Navigation */}
                    <div className="ml-auto hidden h-full items-center space-x-6 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch">
                            <NavigationMenuList className="flex h-full items-stretch space-x-2">
                                {mainNavItems.map((item, index) => (
                                    <NavigationMenuItem
                                        key={index}
                                        className="relative flex h-full items-center"
                                    >
                                        { item.title === 'Cart' ? (

                                        <TooltipProvider
                                        key={item.title}
                                        delayDuration={0}
                                        >
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        isSameUrl(
                                                            page.url,
                                                            item.href,
                                                        ) && activeItemStyles,
                                                        'h-9 cursor-pointer px-3',
                                                    )}
                                                >
                                                   <div className="relative inline-flex items-center">
                                                        <ShoppingCart className="h-5 w-5 text-gray-200" />

                                                        <Badge className="absolute -top-4 -right-5 size-2 rounded-full p-2 font-mono tabular-nums">
                                                            3
                                                        </Badge>
                                                        
                                                    </div>
                                                </Link>
                                                {isSameUrl(page.url, item.href) && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                                )}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{item.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        )
                                        : item.title === 'Notification' ? 
                                        ( 
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                    variant="ghost"
                                                    className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    'h-9 cursor-pointer px-3',
                                                    isSameUrl(
                                                            page.url,
                                                            item.href,
                                                        ) && activeItemStyles,
                                                    )}
                                                >
                                                   <div className="relative inline-flex items-center">
                                                        <BellIcon className="h-5 w-5 text-gray-200" />
                                                        
                                                        <Badge className="absolute -top-3 -right-4 size-2 rounded-full p-1 font-mono tabular-nums"/>
                              
                                                    </div>
                                                    {isSameUrl(page.url, item.href) && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                                )}
                                                </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="p-0 w-lg" align="end">
                                                    <div className='flex items-center justify-between bg-zinc-700'>
                                                        <DropdownMenuLabel>Notification</DropdownMenuLabel>
                                                        <Button variant="link">
                                                            <Link href="/notification" className='text-right bg-red-40'>View All</Link>
                                                        </Button>
                                                    </div>
                                                    <div className='max-h-96 overflow-y-auto'>
                                                        {[...Array(10)].map((_, i) => (
                                                            <div>
                                                                <div className='flex gap-2 items-start p-4'>
                                                                    <Avatar>
                                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                                        <AvatarFallback>CN</AvatarFallback>
                                                                    </Avatar>
                                                                    <div className='flex-1 min-w-0 max-w-md space-y-2'>
                                                                        <h3 className='font-semibold text-sm'>Your order is placed</h3>
                                                                        <p className='truncate text-zinc-400 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, ea!</p>
                                                                        <p className='text-zinc-400 flex gap-2 items-center text-xs'><Clock className='size-3'/> 2 days ago</p>
                                                                    </div>
                                                                </div>
                                                                <DropdownMenuSeparator className='w-full'/>
                                                            </div>
                                                            ))}
                                                    </div>
                                                    
                                                    
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (

                                        <TooltipProvider
                                        key={item.title}
                                        delayDuration={0}
                                        >
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        navigationMenuTriggerStyle(),
                                                        isSameUrl(
                                                            page.url,
                                                            item.href,
                                                        ) && activeItemStyles,
                                                        'h-9 cursor-pointer px-3',
                                                    )}
                                                >
                                                    {item.icon && (
                                                        <Icon
                                                            iconNode={item.icon}
                                                            className="h-4 w-4"
                                                        />
                                                    )}
                                                </Link>
                                                {isSameUrl(page.url, item.href) && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"></div>
                                                )}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{item.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="ml-2 flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="size-10 rounded-full p-1"
                                >
                                    <Avatar className="size-8 overflow-hidden rounded-full">
                                        <AvatarImage
                                            src={auth.user.avatar}
                                            alt={auth.user.name}
                                        />
                                        <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="flex w-full border-b border-sidebar-border/70">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
