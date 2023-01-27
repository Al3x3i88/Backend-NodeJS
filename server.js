const express = require('express');
const bodyparser = require('body-parser')

const response = require('./network/response') 

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
    
    response.success(req, res, 'Lista de Mensajes')
})

router.post('/message', function (req, res){
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error Simulado')
    }else{

        response.success(req, res, 'Creado correctamente', 201)
    }
    // res.status(201).send({error: '', body: 'Creado correctamente'})
})

app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})