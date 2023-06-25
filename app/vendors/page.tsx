import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { VendorList } from "@/components";
import Header from "@/components/Header";

async function getData() {
    const response = await fetch("http://localhost:3000/api/vendors");
    const data = await response.json();
    const vendors = data.data;
    return vendors;
};

export default async function VendorsPage() {
    const session = await getServerSession(authOptions);
    const vendors = await getData();
    
    if (!session) {
        redirect("signin?callbackUrl=/vendors")
    };
    
    return (
        <div className="flex min-h-screen flex-col items-center w-3/5 mx-auto my-8">
            <Header />
            <VendorList vendors={vendors} />
        </div>
    );
};

