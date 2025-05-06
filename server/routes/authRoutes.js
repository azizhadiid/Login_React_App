import express from 'express';
import {
    connectToDatabase
} from '../lib/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;
    console.log("Received:", { username, email, password }); // tambahkan ini
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
        if (rows.length > 0) {
            return res.status(409).json({
                message: "user already existed"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashPassword])

        res.status(201).json({
            message: "user created successfully"
        })

    } catch (error) {
        console.error("Register error:", error); // Tambahkan log ini
        res.status(500).json(error);
    }
});

authRouter.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log("Received:", { username, email, password }); // tambahkan ini
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
        if (rows.length === 0) {
            return res.status(404).json({
                message: "user not existed"
            })
        }
        const isMatch = await bcrypt.compare(password, rows[0].password)
        if(!isMatch) {
            return res.status(401).json({
                message: "wrong password"
            })
        }

        const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})


        res.status(201).json({
            token: token
        })

    } catch (error) {
        console.error("Register error:", error); // Tambahkan log ini
        res.status(500).json(error);
    }
});



export default authRouter;