import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function SellerProductList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Seller Product List" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className='font-bold text-2xl'>Products</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <Card>
                        <CardContent>
                            <CardDescription>Total Sales</CardDescription>
                            <CardTitle>Total Sales</CardTitle>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardDescription>Total Sales</CardDescription>
                            <CardTitle>Total Sales</CardTitle>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardDescription>Total Sales</CardDescription>
                            <CardTitle>Total Sales</CardTitle>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardDescription>Total Sales</CardDescription>
                            <CardTitle>Total Sales</CardTitle>
                        </CardContent>
                    </Card>
                </div>
                <div className='flex items-center gap-4'>
                <InputGroup className='max-w-lg'>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                    <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                </InputGroup>
                <Button variant="outline">Status</Button>
                <Button variant="outline">Category</Button>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Price" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Price</SelectLabel>
                        <SelectItem value="apple">100 - 200</SelectItem>
                        <SelectItem value="banana">200 - 300</SelectItem>
                        <SelectItem value="blueberry">400 - 500</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Product Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </AppLayout>
    );
}
