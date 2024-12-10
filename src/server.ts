import dotevn from "dotenv";
dotevn.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {})
.then(data => {
    console.log('MongoDB connection succed');
    const PORT = process.env.PORT ?? 3003;
})
.catch(err => console.log('ERORR on connection MongoDB', err));