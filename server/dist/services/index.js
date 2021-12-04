"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var experienceService_1 = __importDefault(require("./experienceService"));
var ServiceContainer = function () {
    return {
        experienceService: (0, experienceService_1.default)(),
    };
};
exports.default = ServiceContainer();
