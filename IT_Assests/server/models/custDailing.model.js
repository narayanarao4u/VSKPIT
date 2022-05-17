const mongoose = require('mongoose');

const custDailingSchema = mongoose.Schema({
    user:String,
    phone:Number,
    exchcode:Number,
    custPhoneNo:Number,
    Remarks:String
  },
    {
      timestamps:true,
      strict:false
});

module.exports.custDailing = mongoose.model('custDailing', custDailingSchema);
