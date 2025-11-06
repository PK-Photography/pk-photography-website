import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      name: "Custom Login",
      credentials: {
        fullName: { label: "Full Name", type: "text" },
        mobileNo: { label: "Mobile Number", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const res = await axios.post(
            `https://pk.thetechthingy.com/api/v1/user/signup`,
            {
              fullName: credentials.fullName,
              mobileNo: credentials.mobileNo,
            }
          );

          if (res.data?.success) {
            const user = res.data.data.user;
            return {
              id: user.id,
              name: user.fullName,
              email: `${user.mobileNo}@pk.local`,
              image: user.profileImage,
              accessToken: res.data.data.accessToken,
            };
          }
          return null;
        } catch (err) {
          console.error("Credentials auth error:", err);
          return null;
        }
      },
    }),
  ],
  secret: "F6VGV6OY457WFDM5",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await axios.post(
            `https://pk.thetechthingy.com/api/v1/user/google-signup`,
            {
              fullName: user.name,
              email: user.email,
            }
          );

          if (res.data?.success) {
            user.id = res.data.data.user._id;
            user.accessToken = res.data.data.accessToken;
          }
        } catch (err) {
          console.error("Google auth error:", err);
          return false; // prevent login if backend fails
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user && typeof user === "object") {
        token.id = (user as any).id;
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...(session.user || {}),
        id: token.id as string,
      };
      (session as any).accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
} satisfies NextAuthOptions);

export const GET = handler;
export const POST = handler;
