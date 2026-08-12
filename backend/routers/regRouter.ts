import { registerValidator } from "../validators/validator.ts";
import express from 'express';
import { createUser } from "../controllers/registerController.ts";

const registerRoute = express.Router();

registerRoute.post('/register', registerValidator, createUser)

export default registerRoute