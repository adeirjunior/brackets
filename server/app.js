import express from 'express';
import showdown from 'showdown';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const converter = new showdown.Converter();
dotenv.config({path: './.env.local'});

const md = 
`##React 18 Looks Nice
Today was released a new update on React Library`;

const html = converter.makeHtml(md);

console.log(html);

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.NODE_PORT;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.render('index', {html});
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});