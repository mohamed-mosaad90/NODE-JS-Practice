const http = require('node:http');
const fs = require('fs');
const handler = require('./helper/handler')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Hello, mosaad!</h1>');
            break;

        case "/profile":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(handler.getLayout());
            break;
        case "/styles.css":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end("body{background-color:red}");
            break;
        case "/image.jpg":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/jpeg');
            const photo = fs.readFileSync('./1.jpg')
            res.end(photo);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>a7a not found</h1>');

            break;
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 