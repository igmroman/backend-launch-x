console.log("Hola Mundo");

const http = require('http');

const host = '0.0.0.0'
const port = 3000;

const server = http.createServer((request,response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end("Hola Mundo Uwu")
});

server.listen(port,host, ()=>{
    console.log("Server encendido en "+ host +"/"+port)
});