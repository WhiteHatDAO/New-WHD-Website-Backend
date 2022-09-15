const Profile = require("../models/main-pro-model");

createProfile = (req, res) => {
  Profile.create(
    {
      username: req.body.username,
      website: req.body.website,
      pic: req.body.pic,
      bio: req.body.bio,
      wallet: req.body.wallet,
      email: req.body.email,
      twitter: req.body.twitter,
      github: req.body.github,
      timezone: req.body.timezone,
      discord: req.body.discord,
      project_dao: req.body.project_dao,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Profile was created successfully." });
    }
  );
};

updateProfile = async (req, res) => {
  await Profile.updateOne(
    { _id: req.body.id },
    {
      username: req.body.username,
      website: req.body.website,
      pic: req.body.pic,
      bio: req.body.bio,
      wallet: req.body.wallet,
      email: req.body.email,
      twitter: req.body.twitter,
      github: req.body.github,
      timezone: req.body.timezone,
      discord: req.body.discord,
      project_dao: req.body.project_dao,
    },
    (err, profile) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: profile });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getProfile = async (req, res) => {
  await Profile.find(req.query, (err, profile) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, error: "Profile not found" });
    }
    return res.status(200).json({ success: true, data: profile });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
};
