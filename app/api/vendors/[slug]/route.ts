import { connectDB } from "@/database/db";
import Vendor from "@/database/models/Vendor";
import { NextResponse } from "next/server";
import { ParamsType } from "@/types";


export async function GET(request: Request, { params }: ParamsType) {
    console.log("GET api request.....")
    const id = params.slug;
    
    try {
        const db = await connectDB();
        const  vendor = await Vendor.findById(id);

        if (!vendor) {
            return NextResponse.json({ message: "Not Found" }, { status: 404 });
        };

        return NextResponse.json(vendor);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    };
};


export async function PUT(request: Request, { params }: ParamsType) {
    const id = params.slug;

    try {
        await connectDB();
        const data = await request.json();
        const updatedVendor = await Vendor.findByIdAndUpdate(id, data, { new: true });

        if (!updatedVendor) {
            return NextResponse.json({ message: "Not Found" }, { status: 404 });
        };

        return NextResponse.json(updatedVendor);

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    };
};


export async function DELETE(request: Request, { params }: ParamsType) {
    const id = params.slug;
    
    try {
        await connectDB();
        const db = await connectDB();
        const deletedVendor = await Vendor.findByIdAndDelete(id);

        if (!deletedVendor) {
            return NextResponse.json({ message: "Not Found" }, { status: 404 });
        };

        return NextResponse.json({ message: "Vendor deleted successfully" })

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
};

