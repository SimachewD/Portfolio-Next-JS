

import { addExperience } from "../handlers/adminHandler";
import { getExperiences } from "../handlers/clientHandler";



export async function GET(request:Request) {
    return getExperiences(request);
}

export async function POST(request:Request) {
    return addExperience(request);
}