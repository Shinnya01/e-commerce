"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, PlusCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import AppLayout from "@/layouts/app-layout"
import { dashboard } from "@/routes"
import { Head, Link } from "@inertiajs/react"
import { type BreadcrumbItem } from "@/types"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// -------------------------------------------------------
// DATA
// -------------------------------------------------------
// type Product = {
//   name: String
//   price: Number
//   category: String
//   stock: Number
//   sku: String
//   rating: Number
//   status: String
// }

// const invoices: Product[] = [
//   {
//     name: "Nike Running Shoes",
//     price: 2500,
//     category: "Footwear",
//     stock: 42,
//     sku: "NK-RUN-001",
//     rating: 4.8,
//     status: "Available",
//   },
//   {
//     name: "Adidas Hoodie",
//     price: 1800,
//     category: "Clothing",
//     stock: 30,
//     sku: "AD-HOOD-002",
//     rating: 4.5,
//     status: "Low Stock",
//   },
//   {
//     name: "Puma Backpack",
//     price: 1200,
//     category: "Accessories",
//     stock: 66,
//     sku: "PM-BAG-003",
//     rating: 4.6,
//     status: "Available",
//   },
// ]

interface Product {
  id: number
  name: string
  description: string
  price: string
  stock: number
  image: string
  category?: { name: string }
  sub_category?: { name: string }
}

// -------------------------------------------------------
// PAGE COMPONENT
// -------------------------------------------------------
export default function SellerProductList({ products }: { products: Product[]}) {

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium ml-3">{row.getValue("name")}</div>,
    },
      {
      accessorKey: "price",
      header: ({ column }) => (
        <div className="">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-auto"
        >
          Price
          <ArrowUpDown className="ml-3 h-4 w-4" />
        </Button>
      </div>
      ),
      cell: ({ row }) => <div className="ml-3">{row.getValue("price")}</div>,
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <div className="">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-auto"
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      ),
      cell: ({ row }) => {
        const category = row.original.category?.name ?? "—"
        return <div className="ml-3">{category}</div>
      }
    },
    {
      accessorKey: "sub_category",
      header: ({ column }) => (
        <div className="">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-auto"
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      ),
      cell: ({ row }) => {
        const sub_category = row.original.sub_category?.name ?? "—"
        return <div className="ml-3">{sub_category}</div>
      }
    },
    {
      accessorKey: "sku",
      header: "SKU",
      cell: ({ row }) => <div>{row.getValue("sku")}</div>,
    },
  {
      accessorKey: "stock",
      header: ({ column }) => (
        <div className="">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-auto"
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      ),
      cell: ({ row }) => {
        const stock = row.getValue("stock") as string

        return <div className='capitalize font-medium ml-3'>{stock}</div>
      },
    },
  {
      accessorKey: "status",
      header: ({ column }) => (
        <div className="">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-auto"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      ),
      cell: ({ row }) => {
        const stock = Number(row.original.stock)

        let status = ""
        let color = ""

        if (stock > 10) {
          status = "Available"
          color = "text-green-600"
        } else if (stock > 0) {
          status = "Low Stock"
          color = "text-yellow-600"
        } else {
          status = "Out of Stock"
          color = "text-red-600"
        }

        return (
          <Badge className="rounded-sm ml-3" variant="outline">
            <div className={`capitalize font-medium ${color}`}>{status}</div>
          </Badge>
        )
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
              //   onClick={() => navigator.clipboard.writeText(product.sku)}
              >
                Copy Invoice ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const breadcrumbs: BreadcrumbItem[] = [
    { title: "Dashboard", href: dashboard().url },
  ]

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Seller Product List" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Products</h1>
            <Button asChild>
                <Link href="/product/create"><PlusCircle/> Add Product</Link>
            </Button>
        </div>
        

        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card><CardContent><CardDescription>Total Sales</CardDescription><CardTitle className="text-3xl">$30,230</CardTitle></CardContent></Card>
          <Card><CardContent><CardDescription>Number of Sales</CardDescription><CardTitle className="text-3xl">982</CardTitle></CardContent></Card>
          <Card><CardContent><CardDescription>Affiliate</CardDescription><CardTitle className="text-3xl">$4,530</CardTitle></CardContent></Card>
          <Card><CardContent><CardDescription>Discounts</CardDescription><CardTitle className="text-3xl">$2,230</CardTitle></CardContent></Card>
        </div>

        {/* Filter + Column control */}
        <div className="flex items-center py-4 gap-2">
          <Input
            placeholder="Filter product..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Data Table */}
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
