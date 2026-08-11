import mongoose from 'mongoose';

export async function connectDB(){
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connected succesfully');

    }catch(err){
        console.error(err)
        process.exit(1)
    }
}