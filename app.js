const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./config');

const port = process.env.PORT || 3000

app.use(morgan());
app.use(cors());
const zipRouter = require('./Api/routes');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', zipRouter);

app.listen(port, () => {
    console.log("server starting on port : ", port)
});

