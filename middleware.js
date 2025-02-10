import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";
// import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };

// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next).*)'],
// };

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
};
