import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { VendorForm } from "@/components";


async function CreateVendors() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect(`/signin?callbackUrl=/vendors/create`);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between w-3/5 mx-auto my-10">
            <VendorForm method="CREATE" />
        </div>
    );
};

export default CreateVendors;

