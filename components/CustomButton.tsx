"use client"

import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton({ title, btnType, containerStyles, handleClick, textStyles, leftIcon, rightIcon }:
CustomButtonProps) {
    return (
        <button
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            {leftIcon && (
                <div className="relative w-7 h-7">
                    <Image
                        src={leftIcon}
                        alt="left icon"
                        fill
                        className="object-contain"
                    />
                </div> 
            )}
            <span className={`mx-auto ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-7 h-7">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div> 
            )}
        </button>
    );
};

export default CustomButton;