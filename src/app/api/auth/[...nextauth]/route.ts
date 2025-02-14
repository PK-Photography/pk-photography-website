// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: "219399129553-49f79i8eg73iteto097r3106d8f51nak.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login", // Optional: Custom sign-in page
//   },
// };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // Optional custom sign-in page
  },
});

// ✅ Correctly exporting GET & POST as functions
export const GET = handler;
export const POST = handler;
