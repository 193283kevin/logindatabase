const mysql = require('mysql2');

require('dotenv').config();
if (process.env.host === null || process.env.host === ''){
    process.env.host = document.getElementById('host').nodeValue;
    process.env.user = document.getElementById('user').nodeValue;
    process.env.password = document.getElementById('password').nodeValue;
    process.env.database = document.getElementById('database').nodeValue;
    process.env.port = document.getElementById('port').nodeValue;
}
const host = process.env.host // document.getElementById('host').nodeValue;
const user = process.env.user // document.getElementById('user').nodeValue;
const password = process.env.password // document.getElementById('password').nodeValue;
const database = process.env.database // document.getElementById('database').nodeValue;
const port = process.env.port // document.getElementById('port').nodeValue;
const connection = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database,
    port:port
});
connection.connect(function (err) {
    if (err) {
        document.getElementById('txtData').nodeValue = err.code+'\n'+err.fatal+'\nerror';
       // console.log(err.code);
       // console.log(err.fatal);
       // console.log('error');
    } else {
        setTimeout( function(){location.href='./index3.html'}, 3000);
        // document.getElementById('txtData').nodeValue = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port}`
    }
 });
 
 module.exports = connection 