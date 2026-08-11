import mongoose from 'mongoose';

export async function connectDB(){
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined');
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected succesfully');

    }catch(err){
        console.error(err)
        process.exit(1)
    }
}