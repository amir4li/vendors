"use client"

import { signIn,  signOut } from "next-auth/react";
import CustomButton from "./CustomButton";

function AuthButton({ title, isAuth }: { title: string, isAuth: boolean }) {

    const clickHandler = (isAuth: boolean)=> {
        if (isAuth) {
            signOut();
        } else {
            signIn();
        };
    };

    return (
        <CustomButton
            title={title}
            handleClick={()=> clickHandler(isAuth)}
            containerStyles="rounded border h-10 w-44"
            textStyles = "text-white font-medium"
        />
    );
};

export default AuthButton;
