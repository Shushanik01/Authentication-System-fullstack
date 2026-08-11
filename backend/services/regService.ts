import { regModel } from "../database/dbModel.ts";
import bcrypt from 'bcrypt'

type UserData = {
    name: string,
    email: string,
    password: string
}
export const registerUser = async (userData: UserData) => {
    const { name, email, password } = userData;

    const checkName = await regModel.findOne({ name })
    if (checkName) {
        throw new Error('Username is taken, please try another one')
    }

    const checkEmail = await regModel.findOne({ email });
    if (checkEmail) {
        throw new Error('Account with this email already exists')
    }

    const newPassword = await bcrypt.hash(password, 10);
    const newUser = await regModel.create({
        name,
        email,
        password: newPassword
    });
    return newUser
}