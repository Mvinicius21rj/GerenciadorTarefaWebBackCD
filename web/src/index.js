  
const express = require('express');

const servidor = express();

servidor.get('/api', (req, res) =>{
    res.send('Parabens')
});



servidor.listen(3000)