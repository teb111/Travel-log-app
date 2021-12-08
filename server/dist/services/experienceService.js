"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../response/response");
var ExperienceService = function () {
    var addExperience = function (req, res) {
        var email = req.body.email;
        console.log(email);
        // successResponse(res, email, 200);
        (0, response_1.errorResponse)(res, 6, 403);
    };
    return {
        addExperience: addExperience,
    };
};
exports.default = ExperienceService;
