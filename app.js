import express from 'express';
import path from 'path';

// Loads variables from a .env file into process.env
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');
const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];
app.post('/new', (req, res) => {
    const { name, message } = req.body;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect('/');
});
app.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
