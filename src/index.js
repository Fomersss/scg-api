import express from 'express';

// create express instance
const app = express();

//declare environment variable PORT , use 3000 for default port 
const port = process.env.PORT || 3000;

//create route
app.get('/', (req, res) => res.send('Hello World'))

// start server
app.listen(port, () =>
    console.log(`app listening on port ${port}!`),
);