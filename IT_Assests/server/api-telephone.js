const router = require('express').Router();
const  xls = require('xlsx');


function xldata (){
    let wb = xls.readFile("ServiceDirectoryPhone.xlsx",{cellDates:true});
    let ws = wb.Sheets["Sheet1"];
    return xls.utils.sheet_to_json(ws);
}

router.get('/telephone',function (req,res){
    res.json({tele:xldata()})
});

module.exports = router;
