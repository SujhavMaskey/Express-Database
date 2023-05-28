import { config } from 'dotenv';
import cors from 'cors';

import express from 'express';

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

export default app;
