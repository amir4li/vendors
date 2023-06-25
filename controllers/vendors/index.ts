import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
import Vendor from "@/database/models/Vendor";
import { connectDB } from "@/database/db";


// GET all vendors
export async function handleGetRequest( req: NextApiRequest, res: NextApiResponse ) {

    try {
        const db = await connectDB();
        const vendors = await Vendor.find()
        res.status(200).json({ vendors });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong" });
    } 
};


// CREATE vendor
export async function handlePostRequest( req: NextApiRequest, res: NextApiResponse ) {
    console.log("here....")
    try {
        await connectDB();
        const newVendor = await Vendor.create(req.body);
        
        res.status(201).json({ vendor: newVendor });

    } catch (err) {
        res.status(500).json({ message: "Error creating vendor" });
    }
};


// GET a single vendor
export async function getVendorApi( req: NextApiRequest, res: NextApiResponse ) {
    const { query } = req;
    const { id } = query;

    try {
        await connectDB();
        const vendor = await Vendor.findById(id);

        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        };
        res.status(200).json({ vendor });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong" });
    };
};


// UPDATE vendor
export async function updateVendorApi( req: NextApiRequest, res: NextApiResponse ) {
    const { query: { id } } = req;
    const vendorId = new mongoose.Types.ObjectId(id as string);
    try {
        const db = await connectDB();
        const { vendorName, bankAccountNo, bankName, addressLine1, addressLine2, city, country, zipCode } = req.body;
        const updatedVendor = await Vendor.findByIdAndUpdate(vendorId, {
            vendorName,
            bankAccountNo,
            bankName,
            addressLine1,
            addressLine2,
            city,
            country,
            zipCode
        }, { new: true });

        if (!updatedVendor) {
            return res.status(404).json({ message: "Vendor not found" });
        };
        return res.status(200).json({ vendor: updatedVendor });

    } catch (err) {
        return res.status(500).json({ message: "Error updating vendor" });
    };
};


// DELETE vendor
export async function deleteVendorApi( req: NextApiRequest, res: NextApiResponse ) {
    const { query: { id } } = req;
    const vendorId = new mongoose.Types.ObjectId(id as string);

    try {
        const db = await connectDB();
        const deletedVendor = await Vendor.findByIdAndDelete(vendorId);

        if (!deletedVendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        res.status(200).json({ message: "Vendor deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: "Error deleting vendor" });
    };
};

