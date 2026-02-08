import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  cause: String,

  status: {
    type: String,
    default: "PENDING",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Donation", DonationSchema);
