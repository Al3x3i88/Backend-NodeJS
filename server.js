const express = require('express');
const bodyparser = require('body-parser')
// const router = require('./components/message/network');
const router = require ('./network/routes')
const PORT = process.env.PORT || 3001;

var app = express();

app.use(bodyparser.urlencoded({extended : false }))
// app.use(router);
router(app);

app.use('/app', express.static('static'))

app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})