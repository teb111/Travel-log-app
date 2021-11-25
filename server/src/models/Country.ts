import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // refrencing the user model here
    }, // associating a user with the review
  },
  {
    timestamps: true,
  }
);

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", countrySchema);

export default Country;
