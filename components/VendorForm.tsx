"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { VendorType } from "@/types";
import CustomButton from "./CustomButton";

interface VendorFormProps {
    method: string;
    vendor?: VendorType;
    id?: string;
};

const initialFormValue = {
    vendorName: "",
    bankAccountNo: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: ""
};

function VendorForm({ method, vendor, id }: VendorFormProps) {
    const vendorData = vendor ? vendor : initialFormValue;

    const router = useRouter();
    const [formData, setFormData] = useState<VendorType>(vendorData);

    const createVendor = async ()=> {
        try {
            const response = await fetch(`/api/vendors`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 201) {
                router.push('/vendors');
            };
            
        } catch (err) {
            alert("Error creating new vendor");
            router.push('/vendors');
        };
    };


    const updateForm = async ()=> {
        try {
            const response = await fetch(`/api/vendors/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                router.push('/vendors');
            }
            
        } catch (err) {
            alert("Error updating vendor");
            router.push('/vendors');
        };
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (method === "CREATE") {
            createVendor();

        } else if (method === "PUT") {
            updateForm();
        };
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    
    return (
        <div className="border p-5 w-full">
            <h1 className="text-5xl mb-10 text-center">
                {method === "CREATE" ? "New Vendor" : "Update Vendor"}
            </h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                
                <div className="flex justify-between">
                    <label>Vendor Name:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="vendorName"
                        value={formData?.vendorName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Bank Account No:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="number"
                        name="bankAccountNo"
                        value={formData?.bankAccountNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Bank Name:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="bankName"
                        value={formData?.bankName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Address Line 1:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="addressLine1"
                        value={formData?.addressLine1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Address Line 2:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="addressLine2"
                        value={formData?.addressLine2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>City:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="city"
                        value={formData?.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Country:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="text"
                        name="country"
                        value={formData?.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <label>Zip Code:</label>
                    <input
                        className="bg-slate-800 text-white border w-3/4"
                        type="number"
                        name="zipCode"
                        value={formData?.zipCode}
                        onChange={handleChange}
                        required
                    />
                </div>

                <CustomButton
                    title={method === "CREATE" ? "Create" : "Update"}
                    btnType="submit"
                    containerStyles="w-1/2 mx-auto my-3 h-8 rounded bg-blue-600"
                    textStyles = "text-white font-medium"
                />
            </form>
        </div>
    );
};

export default VendorForm;

