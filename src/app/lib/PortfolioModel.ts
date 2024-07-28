import mongoose, { Schema } from 'mongoose';

export interface IExperience {
  _id?:string;
  title: string;
  company?: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export interface IProject {
  _id?:string;
  name: string;
  description?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}


const aboutSchema = new Schema({
  aboutme: { type: String, required: true },
});

const experienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  company: { type: String },
  location: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String },
});

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String },
  technologies: [{ type: String, required: true }],
  imageUrl: { type: String },
  githubUrl: { type: String },
  demoUrl: { type: String },
});


const AboutModel = mongoose.models.About || mongoose.model('About', aboutSchema);
const ProjectModel = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
const ExperienceModel = mongoose.models.Experience || mongoose.model<IExperience>('Experience', experienceSchema);

export { AboutModel, ProjectModel, ExperienceModel };
