import http from 'http';
import fs from 'fs';

const html = fs.readFileSync("./index.html");
const err = fs.readFileSync("./err.html");

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        console.log("Success!!!!!!!!!!!!");
        res.end(html);
    }
    else{
        console.log("Sad :( ");
        res.statusCode = 404;
        res.end(err);
    }
});

server.listen(9999,'192.168.1.6',()=>{
    console.log("Server is running on 192.168.1.6:9999/");
})