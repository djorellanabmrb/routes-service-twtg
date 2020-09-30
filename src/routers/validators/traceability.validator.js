const { body,param} = require('express-validator');
module.exports = {
    getTraceabilityValidator: [
        param("idRoute")
        .optional()
        .notEmpty().withMessage("val10")
        .isString().withMessage("val11"),
        param("orderId")
        .optional()
        .notEmpty().withMessage("val12")
        .isString().withMessage("val13"),
        param("status")
        .optional()
        .notEmpty().withMessage("val14")
        .isString().withMessage("val15"),
        param("company")
        .optional()
        .notEmpty().withMessage("val16")
        .isString().withMessage("val17"),
        param("sucursal")
        .optional()
        .notEmpty().withMessage("val18")
        .isString().withMessage("val19"),
        param("alert")
        .optional()
        .notEmpty().withMessage("val20")
        .isString().withMessage("val21"),
        param("biker")
        .optional()
        .notEmpty().withMessage("val22")
        .isString().withMessage("val23"),
        param("latitude")
        .optional()
        .isFloat({min: -90, max: 90}).withMessage('val6'),
        param("longitude")
        .optional()
        .isFloat({min: -180, max: 180}).withMessage('val7'),
    ],
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
    ]
}