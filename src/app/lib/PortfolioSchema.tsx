import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience {
  title: string;
  company?: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export interface IProject {
  name: string;
  description?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface IPortfolio extends Document {
  about: string;
  experience: IExperience[];
  projects: IProject[];
}

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

const portfolioSchema = new Schema<IPortfolio>({
  about: { type: String, required: true },
  experience: [experienceSchema],
  projects: [projectSchema],
});

const Portfolio = mongoose.model<IPortfolio>('Portfolio', portfolioSchema);

export default Portfolio;
