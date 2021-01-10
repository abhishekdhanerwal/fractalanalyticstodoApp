const BucketModel = require('../models/bucket.model');

exports.getAll = async (req, res, next) => {
    try {
        const allUsers = await BucketModel.find({}).exec();
        res.json(allUsers);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.save = async (req, res, next) => {
    try {
        let allBuckets = await BucketModel.find({}).exec();

        const Bucket = new BucketModel({
            name: req.body.formDetails.input,
            code: req.body.formDetails.input[0].toUpperCase() + Number(allBuckets.length)+1
        })

        const result = await Bucket.save();
        allBuckets = await BucketModel.find().exec();
        
        res.json({ result, allBuckets });
    } catch (err) {
        res.status(500).send(err);
    }
}