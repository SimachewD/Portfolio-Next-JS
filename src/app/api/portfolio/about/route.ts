

import { NextResponse } from "next/server";
import { updateAbout } from "../handlers/adminHandler";
import { getAbout } from "../handlers/clientHandler";


export async function GET(request:Request, ) {
    return getAbout(request);
}

export async function PATCH(request:Request) {
    return updateAbout(request);
}