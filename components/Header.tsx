import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthButton from "./AuthButton";

async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <div className="flex justify-between items-center w-4/5 mb-5 px-5">
            <h1 className="text-xl w-3/5 flex-1">Welcome <span className="font-bold">{session?.user?.name}</span></h1>
            <AuthButton title={session ? "Sign Out" : "Sign In"} isAuth={session ? true : false} />
        </div>
    );
};

export default Header;

