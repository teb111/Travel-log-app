"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Handle errors
var successResponse = function (res, message, statusCode) {
    if (statusCode === void 0) { statusCode = 500; }
    res.status(statusCode).json({
        success: true,
        response: {
            statusCode: statusCode,
            message: message,
        },
    });
};
exports.default = successResponse;
