const mongoose = require('mongoose');


const AssestSchema = mongoose.Schema({
    Type: String,
    Make: String,
    Model:String,
	SerailNo:String,
    Remark: String,
    User:String,
    Section:String,
    location:String
}, {
    timestamps: true,
    strict: false
});

module.exports.Assest = mongoose.model('Assest', AssestSchema);
