const express = require ('express');
const { engine } = require('express-handlebars');
const path = require('path')
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const connection = require('./db.js')
const app = express();
app.set('port', 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>  {
    console.log('Listening on port', app.get('port'));
})


app.get('/', (req, res)=> {
    resp.render('index', {msg: 'ESTO ES UN MENSAJE DESDE NODE'});
})

app.get('/', (req, res)=> {
    resp.render('login');
})

app.get('/register', (req, res)=>{
    res.render('register');
})


app.post('/register', async  (req, res)=> {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const nombreusuario = req.body.nombreusuario;
    const correo = req.body.correo;
    const contrasena = req.body.contraseña;
    const numero = req.body.numero;
    const edad = req.body.edad;
    const genero = req.body.genero;
    
    

    
    connection.query('INSERT INTO persona SET ?',  {
        nombre:nombre, 
        apellido:apellido, 
        nombreusuario:nombreusuario,    
        correo:correo, 
        contrasena:contrasena, 
        numero:numero,
        edad:edad, 
        genero:genero 
        },
        async(error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.send('SIUU')
            }   
        }
        )
})