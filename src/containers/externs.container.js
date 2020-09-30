const { asValue } = require('awilix');
const  TwtgOdm  = require("odm-twtg")
const twtOdm = new TwtgOdm();
twtOdm.connect();
module.exports = function(container){
    container.register({
        twtOdm: asValue(twtOdm)
    });
}