import express from 'express';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config({path: './.env.local'});

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.NODE_PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.send("Running");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});