"use client"

import { signOut } from "next-auth/react";
import CustomButton from "./CustomButton";

function SignOutButton() {
    return (
        <CustomButton
            title="Sign Out"
            handleClick={()=> signOut()}
            containerStyles="rounded border h-10 w-44"
            textStyles = "text-white font-medium"
        />
    );
};

export default SignOutButton;

