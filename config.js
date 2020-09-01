const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect('mongodb+srv://At11:atmak11@cluster0.d1re6.mongodb.net/zipDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
