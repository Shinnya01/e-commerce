import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, Circle, Dot, PlusCircle } from 'lucide-react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, ImageIcon } from "lucide-react"
import { useCallback } from "react"
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ButtonGroup } from '@/components/ui/button-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from "sonner"
import InputError from '@/components/input-error';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product',
        href: '/product',
    },
    {
        title: 'Add Product',
        href: '/product/create',
    },
];

type Category = {
  id: number
  name: string
}

type AddProductProps = {
  categories: Category[]
  subCategories: Category[]
}


export default function AddProduct({ categories, subCategories }: AddProductProps) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        sku: '',
        price: '',
        barcode: '',
        description: '',
        base_price: '',
        discounted_price: '',
        charge_tax: false,
        in_stock: true,
        stock: '',
        status: '',
        category: '',
        sub_category: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post('/product');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Product" />
            <form onSubmit={handleSubmit}>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 max-w-6xl w-full mx-auto">
                
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <Button asChild className='aspect-square' size="sm">
                            <Link href="/product">
                                <ChevronLeft/>
                            </Link>
                        </Button>
                        
                        <h1 className='text-2xl font-bold'>Add Product</h1>
                    </div>
                    <div className='space-x-2'>
                 
                        <Button variant="destructive">Discard</Button>
            
                        <Button variant="default" type='submit' disabled={processing}>
                            Create
                        </Button>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 space-y-4'>
                        <Card className='p-4'>
                            <FieldSet>
                                <FieldLegend>Product Details</FieldLegend>
                                <FieldDescription>
                                We need your address to deliver your order.
                                </FieldDescription>
                                <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <Input 
                                        id="name" 
                                        type="text" 
                                        placeholder="123 Main St" 
                                        value={data.name} 
                                        onChange={(e) => setData('name', e.target.value)}/>
                                    <InputError message={errors.name} />
                                </Field>
                                <div className="grid grid-cols-2 gap-4">
                                    <Field>
                                    <FieldLabel htmlFor="sku">SKU</FieldLabel>
                                        <Input 
                                            id="sku" 
                                            type="text" 
                                            placeholder="New York" 
                                            value={data.sku} 
                                            onChange={(e) => setData('sku', e.target.value)}
                                            />
                                            <InputError message={errors.sku} />
                                    </Field>
                                    <Field>
                                    <FieldLabel htmlFor="barcode">Barcode</FieldLabel>
                                    <Input 
                                        id="barcode" 
                                        type="text" 
                                        placeholder="90502" 
                                        value={data.barcode} 
                                        onChange={(e) => setData('barcode', e.target.value)}/>
                                        <InputError message={errors.barcode} />
                                    </Field>
                                </div>
                                <Field>
                                    <FieldLabel htmlFor='description'>Description</FieldLabel>
                                    <Textarea 
                                        id="description"
                                        placeholder='product description'
                                        value={data.description} 
                                        onChange={(e) => setData('description', e.target.value)}
                                        />
                                    <InputError message={errors.description} />
                                    <FieldDescription>
                                        Set a description to the product for better visibility.
                                    </FieldDescription>
                                    
                                </Field>
                                </FieldGroup>
                            </FieldSet>
                        </Card>
                        <Card className='p-4'>
                            <FieldSet>
                                <div className='flex items-center justify-between'>
                                    <FieldLegend>Product Images</FieldLegend>
                                    <Button variant="link">Add media from URL</Button>
                                </div>
                                <Label
                                    htmlFor="images"
                                    className="flex flex-col items-center justify-center border border-dashed border-zinc-700 rounded-lg p-6 text-center cursor-pointer"
                                >
                                    <ImageIcon className="h-10 w-10 text-gray-400 mb-3" />
                                    <p className="text-sm text-gray-600">Drop your images here</p>
                                    <p className="text-xs text-gray-400 mb-4">PNG or JPG (max. 5MB)</p>
                                    <Button type="button" variant="outline" className="flex items-center gap-2">
                                    <Upload className="w-4 h-4" />
                                    Select images
                                    </Button>

                                    {/* Hidden input */}
                                    <input
                                    id="images"
                                    name="images"
                                    type="file"
                                    accept="image/png,image/jpeg"
                                    className="hidden"
                                    multiple
                                    />
                                </Label>
                            </FieldSet>
                        </Card>
                        <Card className='!p-0'>
                            <FieldSet className='p-4 mt-4'>
                                <FieldLegend>Variants</FieldLegend>
                                <div className='grid grid-cols-[auto_1fr_1fr] gap-4'>
                                    <Field>
                                        <FieldLabel htmlFor='value'>Option</FieldLabel>
                                        <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="size">Size</SelectItem>
                                                <SelectItem value="color">Color</SelectItem>
                                                <SelectItem value="weight">Weight</SelectItem>
                                                <SelectItem value="smell">Smell</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor='value'>Value</FieldLabel>
                                        <Input 
                                            id="value" 
                                            type='number'
                                            placeholder='ex. sm, red, 12kg, sour' 
                                            />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor='value'>Price</FieldLabel>
                                        <Input 
                                            id="value" 
                                            type='number'
                                            placeholder='123' 
                                            />
                                    </Field>
                                </div>
                            </FieldSet>
                            <Button variant="outline" className='rounded-t-none'><PlusCircle/> Add Variant</Button>
                        </Card>
                    </div>
                    <div className='space-y-4'>
                        <Card className='p-4'>
                            <FieldSet>
                                <FieldLegend className='mb-4'>Pricing</FieldLegend>
                                
                                <Field>
                                    <FieldLabel htmlFor='basePrice'>Base Price</FieldLabel>
                                    <Input 
                                        id="basePrice"
                                        type='number'
                                        placeholder='$100.00'
                                        value={data.base_price} 
                                        onChange={(e) => setData('base_price', e.target.value)}
                                        />
                                    <InputError message={errors.base_price} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor='discounted_price'>Discounted Price</FieldLabel>
                                    <Input 
                                        id="discounted_price"
                                        type='number'
                                        placeholder='$50.00'
                                        value={data.discounted_price} 
                                        onChange={(e) => setData('discounted_price', e.target.value)}/>
                                    <InputError message={errors.discounted_price} />
                                </Field>
                                <div className='flex gap-2'>
                                    <Checkbox 
                                        id="tax"
                                        checked={data.charge_tax}
                                        onCheckedChange={(checked) => setData('charge_tax', !!checked)} />
                                    <InputError message={errors.charge_tax} />
                                    <Label htmlFor="tax">Charge Tax on this product</Label>
                                </div>
                                <Separator/>
                                <div className="flex items-center space-x-2">
                                    <Switch 
                                        id="inStock" 
                                        checked={data.in_stock}
                                        onCheckedChange={(checked) => setData('in_stock', !!checked)}/>
                                    <Label htmlFor="inStock">In Stock</Label>
                                </div>
                                {data.in_stock && (
                                    <div>
                                        <Input 
                                            placeholder='number of stock' 
                                            type='number' 
                                            value={data.stock}
                                            onChange={(e) => setData('stock', e.target.value)}
                                        />
                                        <InputError message={errors.stock} />
                                    </div>
                                )}
                                
                            </FieldSet>
                        </Card>
                        <Card className='p-4'>
                            <FieldSet>
                                <FieldLegend className='mb-4'>Status</FieldLegend>
                                
                                <Field>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) => setData('status', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="draft"><span className='size-2 rounded-full bg-orange-500'/> Draft</SelectItem>
                                                <SelectItem value="active"><span className='size-2 rounded-full bg-green-500'/> Active</SelectItem>
                                                <SelectItem value="archive"><span className='size-2 rounded-full bg-blue-500'/> Archive</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
                                </Field>
                            </FieldSet>
                        </Card>
                        <Card className='p-4'>
                            <FieldSet>
                                <FieldLegend>Categories</FieldLegend>
                                <Field>
                                    <div className='flex gap-2'>
                                    <Select
                                    
                                        value={data.category}
                                        onValueChange={(value) => setData('category', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>

                                            {categories.map((category) => (
                                                <SelectItem key={category.id} value={category.name}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}

                                        </SelectContent>
                                    </Select>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button variant="outline" type="button">
                                                <PlusCircle/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className='flex items-center gap-2'>
                                                <Label htmlFor='name'>Name</Label>
                                                <Input id="name" placeholder='enter category'/>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    </div>
                                </Field>
                                <Field>
                                    <div className='flex gap-2'>
                                    <Select
                                        value={data.sub_category}
                                        onValueChange={(value) => setData('sub_category', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a sub category" />
                                        </SelectTrigger>
                                        <SelectContent>

                                            {subCategories.map((subCategory) => (
                                                <SelectItem key={subCategory.id} value={subCategory.name}>
                                                    {subCategory.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button variant="outline" type="button">
                                                <PlusCircle/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className='flex items-center gap-2'>
                                                <Label htmlFor='name'>Name</Label>
                                                <Input id="name" placeholder='enter sub category'/>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    </div>
                                    
                                </Field>
                               
                            </FieldSet>
                        </Card>
                    </div>
                
                    
                    
                </div>
                
            </div>
            </form>
        </AppLayout>
    );
}
