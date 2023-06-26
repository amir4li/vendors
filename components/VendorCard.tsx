"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { VendorType } from "@/types";


interface VendorCardProps {
    vendor: VendorType;
};


function VendorCard({vendor}: VendorCardProps) {
    const { status } = useSession();
    const router = useRouter();

    const handleEdit = (id: any)=> {
        router.push(`/vendors/update/${id}`);
    };

    const handleDelete = async (id: any)=> {
        if (status === "unauthenticated") {
            alert("Please sign in first.")
        } else {
            if (confirm("Are you sure you wanat to delete this vendor?")) {
                try {
                    const response = await fetch(`/api/vendors/${id}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                    });
                    if (response.status === 200) {
                        alert("Vendor is deleted successfully");
                        router.push('/vendors');
                    };
                } catch (err) {
                    alert("Error deleting vendor");
                };
            };
        }
    };

    return (
        <div className="border p-2">
        <div className="flex gap-7 p-3">
            <div className="flex flex-col gap-1">
                <p className="text-lg">Vendor Name:</p>
                <p className="text-lg">Bank Account No:</p>
                <p className="text-lg">Bank Name:</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-lg">{vendor.vendorName}</p>
                <p className="text-lg">{vendor.bankAccountNo}</p>
                <p className="text-lg">{vendor.bankName}</p>
            </div>
        </div>
        <div className="flex justify-between gap-10 px-3 py-2">
            <CustomButton
                title="Edit"
                handleClick={() => handleEdit(vendor._id)}
                containerStyles="w-full rounded bg-blue-500 h-10"
                textStyles = "text-white font-medium"
            />
            <CustomButton
                title="Delete"
                handleClick={() => handleDelete(vendor._id)}
                containerStyles="w-full rounded bg-red-600 h-10"
                textStyles = "text-white font-medium"
            />
        </div>

        </div>
    );
};

export default VendorCard;

