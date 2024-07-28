

import { addProject } from "../handlers/adminHandler";
import { getProjects } from "../handlers/clientHandler";



export async function GET(request:Request) {
    return getProjects(request);
}

export async function POST(request:Request) {
    return addProject(request);
}
