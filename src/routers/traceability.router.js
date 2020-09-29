const { Router } = require('express');
const { TraceabilityValidator } = require("./validators");

module.exports = function ({ TraceabilityController, ValidationMiddleware }) {
    const router = Router();

    router.post('/traceablity',
    TraceabilityValidator.postTraceabilityValidator,
    ValidationMiddleware.checkValidations,
    TraceabilityController.post.bind(TraceabilityController));

    return router;
};