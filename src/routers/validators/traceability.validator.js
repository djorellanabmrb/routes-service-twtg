const { body} = require('express-validator');
module.exports = {
    postTraceabilityValidator: [
        body("idRoute")
        .optional()
        .notEmpty().withMessage("val10")
        .isString().withMessage("val11"),
        body("orderId")
        .optional()
        .notEmpty().withMessage("val12")
        .isString().withMessage("val13"),
        body("status")
        .optional()
        .notEmpty().withMessage("val14")
        .isString().withMessage("val15"),
        body("company")
        .optional()
        .notEmpty().withMessage("val16")
        .isString().withMessage("val17"),
        body("sucursal")
        .optional()
        .notEmpty().withMessage("val18")
        .isString().withMessage("val19"),
        body("alert")
        .optional()
        .notEmpty().withMessage("val20")
        .isString().withMessage("val21"),
        body("biker")
        .optional()
        .notEmpty().withMessage("val22")
        .isString().withMessage("val23"),
        body("latitude")
        .optional()
        .isFloat({min: -90, max: 90}).withMessage('val6'),
        body("longitude")
        .optional()
        .isFloat({min: -180, max: 180}).withMessage('val7'),
        body("createdAt")
        .isDate().withMessage("val24")
    ]
}