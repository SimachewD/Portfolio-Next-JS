

import { NextResponse } from 'next/server';
import {AboutModel, ProjectModel, ExperienceModel, IExperience, IProject } from '@/app/lib/PortfolioModel';
import dbConnect from '@/app/lib/dbConnect';
import { writeFile } from 'fs/promises';
import path from 'path';

// Functions to handle HTTP REQUESTS
export async function updateAbout(request: Request) {
    await dbConnect();
    
    try {
        const { aboutme } = await request.json();
        console.log(aboutme) 
        const update =  await AboutModel.findOneAndUpdate({aboutme});
        if(update){
            return NextResponse.json({ message: 'Successfully inserted about data'});
        }
        
    } catch (error) {
        return NextResponse.json({ message: 'Failed to update about data', error });
    }
} 


export async function addExperience(request: Request) {
    await dbConnect();
    
    try {
        const experience:IExperience = await request.json(); 
        const data =  await ExperienceModel.create(experience);
        if(data){
            return NextResponse.json({ message: 'Experience added successfully', data });
        }
        
    } catch (error) {
        return NextResponse.json({ message: 'Failed to add experience', error });
    }
}



export async function addProject(request: Request) {
    await dbConnect(); // Ensure database connection is established
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const technologies = formData.get('technologies') as string;
    const githubUrl = formData.get('githubUrl') as string;
    const demoUrl = formData.get('demoUrl') as string;

    if(!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename =  file.name.replaceAll(" ", "_");
    console.log(filename);
     
    const imageUrl = `/uploads/${filename}`;

    try {

        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
          );


        const project:IProject = {
            name,
            description,
            technologies: JSON.parse(technologies),
            githubUrl,
            demoUrl,
            imageUrl };

        const data =  await ProjectModel.create(project);
        if(data){
            return NextResponse.json({ message: 'Project added successfully', data });
        } else {
            return NextResponse.json({message: 'Something went wrong'})
        }
        
    } catch (error) {
        return NextResponse.json({ message: 'Failed to add project', error });
    }
}

