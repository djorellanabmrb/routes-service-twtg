const { asClass } = require('awilix');
const { TraceabilityRepository  } = require("../repositories");
module.exports = function(container){
    container.register({
        TraceabilityRepository: asClass(TraceabilityRepository).singleton()
    });
}