"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var reviewSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    body: { type: String, required: true, trim: false },
    costOfTravel: { type: String },
    location: { type: String },
    heritages: { type: String, trim: false },
    imagePost: {
        images: [
            {
                url: String,
                text: String,
            },
        ],
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User", // refrencing the user model here
    }, // associating a user with the review
}, {
    timestamps: true,
});
var countrySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
}, {
    timestamps: true,
});
var Country = mongoose_1.default.model("Country", countrySchema);
exports.default = Country;
