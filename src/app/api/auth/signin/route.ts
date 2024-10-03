import bcrypt from 'bcryptjs';
import dbConnect from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';
import { UserModel } from '@/app/lib/PortfolioModel';
import { createSession } from '@/app/lib/session';

export async function POST(request: Request) {
  const {email, password} = await request.json();

  try {
    // Connect to the database
    await dbConnect();

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
         throw Error( 'User not found.');
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw Error('Invalid password.');
    }
    await createSession(user._id); // Encrypt payload to generate JWT
    return NextResponse.json({ message: 'Signin successful' }, { status: 200 });
  } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
  }
}