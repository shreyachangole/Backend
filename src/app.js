import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: "16kb" })); // fixed typo: "limitl" → "limit"
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/ping", (req, res) => {
  res.send("pong");
});

// Routes
app.use("/api/v1/users", userRouter);

export { app };
