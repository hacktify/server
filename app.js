if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const errorHandler = require('./middlewares/errorHandler')
const routes = require('./routes/index')
const port = process.env.PORT || 3000
const dbName = 'database' // Change here

const app = express()


// mongodb+srv://mongodb:<password>@cluster0-qtldw.gcp.mongodb.net/test?retryWrites=true&w=majority
// Check mongoose connection
// mongoose.connect(`mongodb://localhost/${dbName}-${process.env.NODE_ENV}`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });
mongoose.connect(`mongodb+srv://mongodb:${process.env.MONGODB}@cluster0-qtldw.gcp.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connect to mongodb')
});

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(logger('dev'))

// Routes
app.use('/', routes)

// Error Handler
app.use(errorHandler)

app.listen(port, ()=> console.log('Listening on port', port))