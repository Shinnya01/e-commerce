import Heading from "@/components/heading";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";

export default function orderDetail(){
    return (
        <AppLayout>
            <Head title="Wishlist"/>            
            <div className="max-w-7xl w-full mx-auto bg-red-300 flex-1">
                <h1>My Wishlish</h1>
            </div>
        </AppLayout>
    )
}