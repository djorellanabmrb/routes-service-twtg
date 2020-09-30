const { Router } = require('express');
const { TraceabilityValidator } = require("./validators");
const traceabilityValidator = require('./validators/traceability.validator');

module.exports = function ({ TraceabilityController, ValidationMiddleware }) {
    const router = Router();

    router.post('/',
    TraceabilityValidator.postTraceabilityValidator,
    ValidationMiddleware.checkValidations,
    TraceabilityController.post.bind(TraceabilityController));
    
    router.get("/:id", 
    TraceabilityController.getByOrderId.bind(TraceabilityController));
    return router;
};