const mongoose = require('mongoose');
require('../Model/schema');
const express = require('express');
const zip = express();
const scrape = require('../scrape').scrape;
const zipModel = mongoose.model('zipCode');
const successHandler = require('../helpFunctions').successHandler;
const errorHandler = require('../helpFunctions').errorHandler;


zip.post('/add', async (req,res) => {
    try{
        const zipCode = await scrape(req.body.zip);
        const zipFind = await zipModel.findOne({zip: req.body.zip});
        if(zipFind) {
            return successHandler(res, zipFind);
        }
        const zipCreate = await zipModel.create(JSON.parse(zipCode));
        return successHandler(res, zipCreate);
    } catch (err) {
        return errorHandler(res, err);
    }
})


module.exports = zip;

