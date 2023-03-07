const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');

initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then( () => console.log('conexion exitosa') )
    .catch( (error) => console.log(error) )

db.sync( {alter:true} )
    .then( () => console.log('sincronizacion exitosa') )
    .catch( (error) => console.log(error) )

app.get('/', (req, res) => {
    res.send('welcome to my API')
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`)
})