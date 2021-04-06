const express = require('express');
const morgan = require('morgan')
const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes


//static files


//starting da server bitch!!
app.listen(app.get('port'), () => {
    console.log(`Server listen in da port: ${app.get('port')}`);
})