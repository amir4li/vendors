import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const GoogleClientId = process.env.GOOGLE_CLIENT_ID || "";
const GoogleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";
const JwtSecret = process.env.JWT_SECRET || "";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: GoogleClientId,
            clientSecret: GoogleClientSecret
        }),
    ],
    pages: {
        signIn: "/signin"
    },
    secret: JwtSecret
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}

