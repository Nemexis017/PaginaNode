import http from 'node:http';

http.createServer((req, res) =>{
    console.log(req)
    res.write('hola mundo');
    res.end(); 
})
.listen( 8080 );
console.log('En ejecucion server')
