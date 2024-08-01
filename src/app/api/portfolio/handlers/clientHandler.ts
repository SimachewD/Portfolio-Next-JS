import { NextResponse } from 'next/server';
import {AboutModel, ProjectModel, ExperienceModel } from '@/app/lib/PortfolioModel';
import dbConnect from '@/app/lib/dbConnect';

// Function to handle HTTP REQUEST
export async function getAbout(request: Request) {

  await dbConnect();

  const about = await AboutModel.findOne();
  return NextResponse.json({about});

}

export async function getExperiences(request: Request) {

  await dbConnect();

  const data = await ExperienceModel.find();
  return NextResponse.json({data});

}

export async function getProjects(request: Request) {

  await dbConnect();

  const data = await ProjectModel.find();
  return NextResponse.json({data});

}
