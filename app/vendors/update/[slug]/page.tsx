import { ParamsType } from '@/types';
import { VendorForm } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getVendor(id: string) {
    const response = await fetch(`${process.env.BASE_URL}/api/vendors/${id}`);
    const data = await response.json();
    return data;
};

const EditVendor = async ({ params }: ParamsType) => {
    const session = await getServerSession(authOptions);
    const id = params.slug;
    
    if (!session) {
        redirect(`/signin?callbackUrl=/vendors/update/${id}`)
    };

    const vendor = await getVendor(id);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between w-3/5 mx-auto my-10">
            <VendorForm method="PUT" vendor={vendor} id={id} />
        </div>
    );
};

export default EditVendor;

