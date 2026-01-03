// Local development server for testing serverless functions
// Run with: node api/dev-server.js
// This mimics Vercel's serverless environment locally

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from root .env file
dotenv.config({ path: join(__dirname, '..', '.env') });

// Import the serverless function handler
import leadHandler from './lead.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock the Vercel request/response for our handler
app.all('/api/lead', async (req, res) => {
    try {
        await leadHandler(req, res);
    } catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Local dev server running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Local dev server running at http://localhost:${PORT}`);
    console.log(`📧 Lead endpoint: http://localhost:${PORT}/api/lead`);
});
