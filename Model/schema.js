const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zipCodeSchema = new Schema({
    zip: {
        type: Number,
        required: true
    },
    hardinessZone: {
        type: String
    },
    firstFrost: {
        type: String
    },
    lastFrost: {
        type: String
    },
    primaryCounty: {
        type: String
    }
})

mongoose.model('zipCode', zipCodeSchema);