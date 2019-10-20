import express from 'express';
import cors from 'cors'
import router from './routes/index';

// create express instance
const app = express();

app.use(cors());

//declare environment variable PORT , use 4000 for default port 
const port = process.env.PORT || 4000;

//create route
app.use('/', router);

// start server
app.listen(port, () =>
    console.log(`app listening on port ${port}!`),
);


