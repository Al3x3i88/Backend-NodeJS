const express = require('express');
const bodyparser = require('body-parser')
const router = express.Router();
const PORT = process.env.PORT || 3001;

var app = express();
app.use(bodyparser.urlencoded({extended : false }))
app.use(router);

router.get('/message', function (req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    res.send('Lista de Mensajes')
})

router.delete('/message', function (req, res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje   '+ req.body.text + ' Anadido correctamente')
})

app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})