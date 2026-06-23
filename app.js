import express from 'express';
import { dirname } from 'node:path';
import path from 'node:path';
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});
app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});
app.get('/contact-me', (req, res) => {
    res.sendFile(path.resolve('./contact-me.html'));
});
app.get('/about-me', (req, res) => {
    res.sendFile(path.resolve('./about.html'));
});
app.use((req, res) => {
    res.status(404).sendFile(path.resolve('./404.html'));
});
app.listen(3000, () => console.log('Server running on port 3000'));
