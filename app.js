import express from 'express'; 
import path from 'path';
import hbs from 'hbs'
import 'dotenv/config'


const app = express();
const port = process.env.PORT;
const __dirname = path.resolve(); 

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use( express.static( 'public' ));

app.get('/',  (req, res)=> {
    res.render('home', {
        nombre: 'Jesus Carvajal',
        langue: 'node js',
    })
})

app.get('/generic',  (req, res)=> {
    res.render('generic', {
        nombre: 'Jesus Carvajal',
        langue: 'node js',
    })
})

app.get('/elements',  (req, res)=> {
    res.render('elements', {
        nombre: 'Jesus Carvajal',
        langue: 'node js',
    })

})

app.get('*',  (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`La aplicación corre en el puerto: ${port}`)
})