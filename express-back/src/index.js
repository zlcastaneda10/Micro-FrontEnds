const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')

const {mongoose} = require('./database')

// Settings 
app.set('port', process.env.PORT || 4000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
//Routes
app.use('/api/tasks', require('./routes/task.routes'));
//Static files

// Starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
});