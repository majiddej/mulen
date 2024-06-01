// src/app/api/auth/[...nextauth]/route.ts
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak";
import { getToken } from "@/service/auth";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: "login",
            name: "Login",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "username", type: "text" },
              password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
              console.log("auth")
              return await getToken(credentials)
                .then((response) => {
                  console.log(response, '===========')
                  return { ...response?.data, loginType: "login" };
                })
                .catch((err) => {
                  console.error(`Login failed: ${err}`);
                  return null;
                });
            },
          }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            // @ts-ignore
            session.accessToken = token.accessToken;

            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                console.log("user", user);
                token.id = user.id;
            }
            if (account) {
                console.log("account", account);
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
