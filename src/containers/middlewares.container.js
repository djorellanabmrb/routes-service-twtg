const { asClass } = require('awilix');
const {HealthcheckMiddleware, InternationalizationMiddleware,
    ValidationMiddleware} = require("middlewares-twtg")
module.exports = function(container){
    container.register({
        HealthcheckMiddleware: asClass(HealthcheckMiddleware).singleton(),
        InternationalizationMiddleware: asClass(InternationalizationMiddleware).singleton(),
        ValidationMiddleware: asClass(ValidationMiddleware).singleton()
    });
}