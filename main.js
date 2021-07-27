if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localStorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();
// localStorage.setItem('llave', 'valor');
// console.log(localStorage.getItem('llave'));

var con;
function validarLogin(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(user=='kevin' && password=='0010'){
        if (process.env.host != 'null' ){
            location.href='./index3.html';
        } else{
          location.href='./index2.html';  
        }
        
    } else{
        alert('datos incorrectos');
    }
}
function sendParams() {
    con = require('./connect');
    localStorage.setItem('con',con);
}
function addData() {
    con = require('./connect');
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ("${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }
        console.log("Query exitoso", rows);
        alert(rows);
    });

    // con.end(function () {
        // Conexión Finalizada 
    // });

    // Input data conection database
}

