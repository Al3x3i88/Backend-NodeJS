const express = require('express');
const bodyparser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyparser.urlencoded({extended : false }))
app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de Mensajes')
})

router.delete('/message', function (req, res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje   '+ req.body.text + ' Anadido correctamente')
})

app.listen(3000)
console.log(`Server on port ${3000}`);