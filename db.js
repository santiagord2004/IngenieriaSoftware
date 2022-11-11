const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ToPair' 
})

connection.connect((error)=>{
    if(error){
        console.log('Error de conexión:')
        return;
    }
    console.log('¡SIUUUU!');
});

module.exports = connection;