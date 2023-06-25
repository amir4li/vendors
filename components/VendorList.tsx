"use client"

import { useState } from "react";
import Link from 'next/link'
import { VendorListProps } from "@/types";
import { CustomButton, VendorCard } from "@/components";



const VendorList = ({ vendors }: VendorListProps) => {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedVendors = vendors.slice(startIndex, endIndex);

    const totalPages = Math.ceil(vendors.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="border p-5 w-4/5">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-5xl">Vendors</h1>
                <Link href="/vendors/create">
                    <CustomButton
                        title="Create New Vendor"
                        containerStyles="rounded bg-blue-500 h-10 px-3 w-44"
                        textStyles = "text-white font-medium"
                    />
                </Link>
            </div>
            
            <div className="flex flex-col gap-7">
            {displayedVendors.map(vendor => (
                <VendorCard key={vendor._id} vendor={vendor} />
            ))}
            </div>

            <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                <CustomButton
                    key={index + 1}
                    title={String(index + 1)}
                    handleClick={() => handlePageChange(index + 1)}
                    containerStyles={`${currentPage === index + 1 ? "bg-green-500" : "bg-gray-300"} h-8 px-3`}
                    textStyles={`text-white font-medium ${currentPage === index + 1 ? "" : "text-gray-700"}`}
                />
                ))}
            </div>

        </div>
    );
};

export default VendorList;
