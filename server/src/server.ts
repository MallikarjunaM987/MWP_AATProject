import dotenv from 'dotenv';
dotenv.config();

import { app } from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[QuizForge] Server listening on http://localhost:${PORT}`);
  console.log(`[QuizForge] Environment: ${process.env.NODE_ENV || 'development'}`);
});
