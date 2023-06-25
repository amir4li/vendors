'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import CustomButton from "./CustomButton"

const GoogleSignInButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || undefined;

    return (
            <CustomButton
                title="Continue with Google"
                leftIcon="/Google_G_Logo.svg.webp"
                containerStyles="w-4/6 border mx-auto my-3 h-12 rounded bg-white"
                textStyles = "text-gray-900 font-medium text-2xl"
                handleClick={()=> signIn("google", { callbackUrl })}
            />
    )
}

export default GoogleSignInButton

