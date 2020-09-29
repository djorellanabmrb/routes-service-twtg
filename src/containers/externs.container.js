const { asValue } = require('awilix');
const  TwtgOdm  = require("odm-twtg")
const twtOdm = new TwtgOdm();
module.exports = function(container){
    container.register({
        twtOdm: asValue(twtOdm)
    });
}