

import { NextResponse } from 'next/server';
import {AboutModel, ProjectModel, ExperienceModel, IExperience, IProject } from '@/app/lib/PortfolioModel';
import dbConnect from '@/app/lib/dbConnect';

// Functions to handle HTTP REQUESTS
export async function updateAbout(request: Request) {
    await dbConnect();
    
    try {
        const { aboutme } = await request.json(); 
        const update =  await AboutModel.findOneAndUpdate({aboutme});
        if(update){
            return NextResponse.json({ message: 'Successfully inserted about data', update });
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
    
    try {
        const project:IProject = await request.json(); 
        const data =  await ProjectModel.create(project);
        if(data){
            return NextResponse.json({ message: 'Project added successfully', data });
        }
        
    } catch (error) {
        return NextResponse.json({ message: 'Failed to add project', error });
    }
}

