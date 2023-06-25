import { ParamsType } from '@/types';
import { VendorForm } from "@/components";

async function getVendor(id: string) {
    const response = await fetch(`${process.env.BASE_URL}/api/vendors/${id}`);
    const data = await response.json();
    return data;
};

const EditVendor = async ({ params }: ParamsType) => {
    const id = params.slug;
    const vendor = await getVendor(id);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between w-3/5 mx-auto my-10">
            <VendorForm method="PUT" vendor={vendor} id={id} />
        </div>
    );
};

export default EditVendor;

