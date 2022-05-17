const mongoose = require('mongoose');


const ipdataSchema = mongoose.Schema({
    user: String,
    ip: String,
    OS:String,
    CPUmake:String,
    location:String
}, {
    timestamps: true,
    strict: false
});

module.exports.ipData = mongoose.model('ipdata', ipdataSchema);
