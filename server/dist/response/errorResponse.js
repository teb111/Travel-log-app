"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = exports.errorResponse = void 0;
// Handle errors
var errorResponse = function (res, message, statusCode) {
    if (statusCode === void 0) { statusCode = 500; }
    res.status(statusCode).json({
        success: false,
        error: {
            statusCode: statusCode,
            message: message,
        },
    });
};
exports.errorResponse = errorResponse;
// Handle Sucess
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
exports.successResponse = successResponse;
