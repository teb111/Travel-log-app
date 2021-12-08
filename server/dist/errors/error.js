"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = errorResponse;
