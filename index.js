const express = require('express')
const app = express()
const path = require('path')



//Recibo y entiendo formatos json 
app.use(express.json()) 

//Agrego las rutas a la app
app.use(require('./routes/pruebas.js'));
app.use(require('./routes/practicas.js'));

//Seteo el puerto 
app.set('port', process.env.PORT || 5000); //PaaS probablemente nos asigne un puerto. Sino, port=5000;
app.set('json spaces' , 2); // para mejorar la visualizacion de los json

//Escucho en el puerto
app.listen(app.get('port'), () => {
    console.log(`Listening and serving on port ${app.get('port')} je!`);
});