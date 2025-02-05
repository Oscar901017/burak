import dotevn from "dotenv";

dotevn.config();

import mongoose from 'mongoose';

import app from "./app";

mongoose.connect(process.env.MONGO_URL as string, {})
.then(data => {
    console.log('MongoDB connection succed');
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.info(`The server is running successfully on port:${PORT}`);
        console.log(`Admin project on http://localhost: ${PORT}/admin \n`);
    });
})
.catch(err => console.log('ERORR on connection MongoDB', err));