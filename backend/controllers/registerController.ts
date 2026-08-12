import { registerUser } from '../services/regService.ts';
import type { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const createUser = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const newUser = await registerUser(req.body);
        res.status(201).json({ newUser })
    } catch (err) {
        res.status(400).json({ message: (err as Error).message })
    }
}