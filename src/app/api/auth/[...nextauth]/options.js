import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import AppleProvider  from 'next-auth/providers/apple'

export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        AppleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username",
                    type: 'text',
                    placeholder: "Username"
                },
                password: {
                    label: "Password",
                    type: 'password',
                    placeholder: "Password"
                }
            },
            async authorize(credentials) {
                const user = { id: " 1001", name: "admin", password: "admin" };
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                }
                else {
                    return null;
                }
            }
        })
    ]
};