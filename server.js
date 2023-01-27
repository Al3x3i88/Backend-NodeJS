const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de Mensajes')
})

router.get('/delete', function (req, res){
    res.send('Mensaje Anadido correctamente')
})

app.listen(3000)
console.log(`Server on port ${3000}`);