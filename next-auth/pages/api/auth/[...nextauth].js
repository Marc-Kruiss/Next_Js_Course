import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../lib/mongodb";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: process.env.DB_URL,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: "asdfghhfd",
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
      }
      console.log("Token/user")
      console.log({token, user})
      console.log("----------------")
      return token;
    },
    async session({session,token}) {
      session.user.id = token.id;
      console.log("Session/Token")
      console.log(session, token)
      console.log("----------------")

      return session;
    },
  },
});
