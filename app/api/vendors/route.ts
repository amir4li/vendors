import { NextResponse } from 'next/server';
import { connectDB } from "@/database/db";
import Vendor from "@/database/models/Vendor";


export async function GET() {
    try {
        const db = await connectDB();
        const data = await Vendor.find();

        return NextResponse.json({ data });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    };
};


export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newVendor = await Vendor.create(data);

        return NextResponse.json(newVendor, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    };
};

