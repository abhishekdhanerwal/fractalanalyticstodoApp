const ListModel = require('../models/list.model');

exports.getAll = async (req, res, next) => {
    try {
        const allData = await ListModel.find({}).exec();
        res.json(allData);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.change = async (req, res, next) => {
    try {
        const allData = await ListModel.findByIdAndUpdate(req.body.list._id ,req.body.type === 'CHECK' ? 
        {...req.body.list, isDone: !req.body.list.isDone}
        : 
        {...req.body.list, deleted: !req.body.list.deleted});

        const allLists = await ListModel.find().exec();
        
        res.json({ allData, allLists });
        // res.json(allData);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.save = async (req, res, next) => {
    try {
        let result;
        if(req.body.isEdit){
            result = await ListModel.findByIdAndUpdate(req.body.updateListId, {
                name: req.body.formDetails.input,
                bucketName: req.body.formDetails.bucketName,
                isDone: false,
                deleted: false
            })
        } else {
            const List = new ListModel({
                name: req.body.formDetails.input,
                bucketName: req.body.formDetails.bucketName,
                isDone: false,
                deleted: false
            })
    
            result = await List.save();
        }
        
        const allLists = await ListModel.find().exec();
        
        res.json({ result, allLists });
    } catch (err) {
        res.status(500).send(err);
    }
}