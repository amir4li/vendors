import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { authOptions } from "../api/auth/[...nextauth]/route";


async function SignIn() {
    const session = await getServerSession(authOptions);
    
    if (session) {
        redirect("/vendors")
    } else {
        return (
            <div className="flex flex-col min-h-screen justify-center items-center w-3/6 mx-auto p-10">
                <GoogleSignInButton />
            </div>
        );
    };
};

export default SignIn;

