const express = require('express');
const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//middlewares


//routes


//static files


//starting da server bitch!!
app.listen(app.get('port'), () => {
    console.log(`Server listen in da port: ${app.get('port')}`);
})