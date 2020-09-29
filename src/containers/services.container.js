const { asClass } = require('awilix');
const { TraceabilityService } = require("../services");
module.exports = function(container){
    container.register({
        TraceabilityService: asClass(TraceabilityService).singleton()
    });
}