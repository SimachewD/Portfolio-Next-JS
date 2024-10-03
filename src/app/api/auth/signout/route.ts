import { deleteSession } from "@/app/lib/session";
import { NextResponse } from "next/server";

// Logout function
export async function POST(request: Request) {
  // Attempt to delete the session (e.g., clear cookies or session storage)
  deleteSession();

  // Optionally clear the cookie if using cookies for session management
  const response = NextResponse.json(
    { message: "Signout successful" },
    { status: 200 }
  );

  // Clear any relevant cookies, if necessary
  response.cookies.set('session', '', { path: '/', maxAge: -1 });

  return response; 
}
