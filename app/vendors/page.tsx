import { VendorList } from "@/components";
import Header from "@/components/Header";

async function getData() {
    const response = await fetch(`${process.env.BASE_URL}/api/vendors`);
    const data = await response.json();
    const vendors = data.data;
    return vendors;
};

export default async function VendorsPage() {
    const vendors = await getData();

    
    return (
        <div className="flex min-h-screen flex-col items-center w-3/5 mx-auto my-8">
            <Header />
            <VendorList vendors={vendors} />
        </div>
    );
};

