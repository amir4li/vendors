import { MouseEventHandler } from "react";

export interface ParamsType {
    params: { slug: string};
};

export interface VendorType {
    _id?: string;
    vendorName: string;
    bankAccountNo: string;
    bankName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    zipCode: string;
};

export interface VendorListProps {
    vendors: VendorType[];
};

export interface EditVendorProps {
    vendor: VendorType;
    params: any;
};

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit"
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    leftIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
};

