"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../response/response");
var ExperienceService = function () {
    var addExperience = function (req, res) {
        var email = req.body.email;
        console.log(email);
        (0, response_1.successResponse)(res, email, 200);
        // errorResponse(res, "Bad Request", 403);
    };
    return {
        addExperience: addExperience,
    };
};
exports.default = ExperienceService;
