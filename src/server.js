const express = require('express');
const morgan = require('morgan')
const path = require('path');
const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/task', require('./routes/task.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//starting da server bitch!!
app.listen(app.get('port'), () => {
    console.log(`Server listen in da port: ${app.get('port')}`);
})