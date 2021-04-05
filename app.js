const express = require('express');
const path = require('path');
const puerto = process.env.PORT
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');

});
app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});