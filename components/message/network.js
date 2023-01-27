const express = require('express');
const router = express.Router();

const response = require('../../network/response') 

router.get('/', function (req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    
    response.success(req, res, 'Lista de Mensajes')
})

router.post('/', function (req, res){
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error Simulado')
    }else{

        response.success(req, res, 'Creado correctamente', 201)
    }
    // res.status(201).send({error: '', body: 'Creado correctamente'})
})

module.exports = router;