import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }
});

export default mongoose.models?.Vendor || mongoose.model('Vendor', vendorSchema);
