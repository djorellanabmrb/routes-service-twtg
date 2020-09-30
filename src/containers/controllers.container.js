const { asClass } = require('awilix');
const { TraceabilityController } = require("../controllers");
module.exports = function(container){
    container.register({
        TraceabilityController: asClass(TraceabilityController).singleton(),
    });
}

