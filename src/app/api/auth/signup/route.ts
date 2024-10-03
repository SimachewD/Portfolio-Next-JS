import bcrypt from 'bcryptjs';
import dbConnect from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';
import { UserModel } from '@/app/lib/PortfolioModel';
import { createSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  const {email, password} = await request.json();
  
  // Connect to the database
  await dbConnect();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user document
  const user = new UserModel({
    email,
    password: hashedPassword,
  });

  // Save the user to the database
  try {
    await user.save();
    await createSession(user._id); // Encrypt payload to generate JWT
    return NextResponse.json({ message: 'Signup successful' }, { status: 200 });
  } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
  }
}