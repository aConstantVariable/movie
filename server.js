
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const http = require('http');
const fs = require('fs');
let html;
let jsFile;
let cssFile;

fs.readFile('./index.html', function(err, data) {
    if(err) {
        console.log('cannot load page');
    } 
    html = data;
});

fs.readFile('./index.js', function(err,data) {
    if(err) {
        console.log('error');
    }
    jsFile = data;
});

fs.readFile('./style.css', (err, data)=> {
    if(err) {
        console.log('no css file');
    }
    cssFile = data;
})

http.createServer((req,res) => {

    if(req.url.indexOf('.js') !== -1) {
        res.write(jsFile);
        res.end();
        return;
    }
    if(req.url.indexOf('.css') !== -1) {
        res.write(cssFile);
        res.end();
        return;
    }
res.write(html);
console.log(req.url);

}).listen(3030);