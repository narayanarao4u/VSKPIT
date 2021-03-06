const Document = require('../models/ip.model').ipData;


exports.index =  function(req, res){
    Document.find({status:{$ne:'DELETE'}}, (err, result) => {
        if (!err)
            res.json({ msg: 'Data Retrieve Success', data: result });
        else
            res.json({ msg: 'Data Retrieve failed', err : err });
    });

}

exports.findid =  function(req, res){
    Document.findOne({_id : req.params.id}, (err, result) => {
        if (!err)
            res.json({ msg: 'Data Retrieve Success', data: result });
        else
            res.json({ msg: 'Data Retrieve failed', err : err });
    });

}

exports.find =  function(req, res){
    Document.find(req.body, (err, result) => {
        if (!err)
            res.json({ msg: 'Data Retrieve Success', data: result });
        else
            res.json({ msg: 'Data Retrieve failed', err : err });
    });

}

exports.new =  function(req, res){
    var doc = new Document(req.body);
    doc.save((err, result) => {
        if (!err)
            res.json({ msg: 'Insert Success...', data: result });
        else
            res.json({ msg: 'Error during record insertion ', err : err });
    });

}

exports.update =  function(req, res){
    Document.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, result) => {
        if (!err) { res.json({msg :'Update Success', data : result}); }
        else { res.json({msg:'failed to update : ', err: err}); }
    });

}

exports.delete =  function(req, res){
    console.log(req.body);
    Document.remove({ _id: req.body._id }, (err, result) => {
        if (!err) { res.json({msg :'Delete Success'}); }
        else { res.json({msg:'failed to Delete : ', err: err}); }
    });

}
