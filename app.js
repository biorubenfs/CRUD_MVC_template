import express from 'express';
// import cors from 'cors';
import connectdb from './config/connectdb.js';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';

// Init express
const app = express();

// Init dotenv
dotenv.config();

// Able to receive JSON on body request
app.use(express.json());

// Third-part middleware to use JSON 
// app.use(cors());

// Variables with database parameters
const urlDB = process.env.URL_DB;
const portDB = process.env.PORT_DB;
const nameDB = process.env.NAME_DB;
console.log(urlDB);
console.log(portDB);
console.log(nameDB);

const port = 3000;

// Connect to database
connectdb(urlDB, portDB, nameDB);

// Basic App Middleware: display basic information when use a endpoint
app.use((req, res, next) => {
    let date = new Date();
    console.log(`Time: ${date.toDateString()}
    Request Type: ${req.method}
    Request URL: ${req.originalUrl}`);
    next();
})

// Master Route for users: that is a node to userRoutes
app.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
})