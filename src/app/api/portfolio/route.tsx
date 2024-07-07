// // app/api/users/route.js
// import { Http2ServerRequest } from 'http2';
// import dbConnect from '../../../lib/dbConnect';
// import User from '../../../models/User';

// export async function GET(request) {
//   await dbConnect();
//   const users = await User.find({});
//   return new Response(JSON.stringify(users), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// export async function POST(request) {
//   await dbConnect();
//   const data = await request.json();
//   const user = new User(data);
//   await user.save();
//   return new Response(JSON.stringify(user), {
//     status: 201,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
