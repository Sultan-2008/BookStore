const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const mongoose = require('mongoose');
const bookRoute = require('./route/book.route.js');
const userRoute = require('./route/user.route.js');

const app = express()
app.use(cors());
app.use(express.json());


// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  };
  
  app.use(cors(corsOptions));
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
// connect to mongodb server
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('Error connecting to MongoDB',error);
}

// define Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})