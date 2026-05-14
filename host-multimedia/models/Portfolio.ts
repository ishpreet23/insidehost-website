import mongoose from "mongoose";

const PortfolioSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },

      mediaUrl: {
        type: String,
        required: true,
      },

      type: {
        type: String,
        required: true,
      },

      /* DESCRIPTION */

      description: {
        type: String,
        required: true,

        default:
          "Premium cinematic creative crafted with futuristic visuals, luxury aesthetics and modern branding.",
      },
    },
    {
      timestamps: true,

      /* IMPORTANT */

      toJSON: {
        virtuals: true,
      },

      toObject: {
        virtuals: true,
      },
    }
  );

/* FIX DELETE + ID ISSUE */

PortfolioSchema.virtual("id").get(
  function () {
    return this._id.toHexString();
  }
);

PortfolioSchema.set(
  "toJSON",
  {
    virtuals: true,
  }
);

const Portfolio =
  mongoose.models.Portfolio ||
  mongoose.model(
    "Portfolio",
    PortfolioSchema
  );

export default Portfolio;