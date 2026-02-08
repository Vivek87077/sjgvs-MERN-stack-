import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    res.json({
      success: true,
      donation,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
