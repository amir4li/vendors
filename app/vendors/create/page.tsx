import { VendorForm } from "@/components";

function CreateVendors() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between w-3/5 mx-auto my-10">
            <VendorForm method="CREATE" />
        </div>
    );
};

export default CreateVendors;

