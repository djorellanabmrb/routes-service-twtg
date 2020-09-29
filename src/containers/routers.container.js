const { asFunction } = require('awilix');
const { TraceabilityRouter } = require("../routers");
module.exports = function(container){
    container.register({
        TraceabilityRouter: asFunction(TraceabilityRouter).singleton(),
    });
}