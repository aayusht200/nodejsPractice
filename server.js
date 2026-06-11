import http from 'node:http';
import fs from 'node:fs';
http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.log(err);
            // res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
}).listen(3000, 'localhost', () => {
    console.log('server running');
});
