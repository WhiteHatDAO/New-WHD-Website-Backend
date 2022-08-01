const AuditProject = require("../models/audit_project-model");

createProject = (req, res) => {
  AuditProject.create(
    {
      name: req.body.name,
      logo: req.body.logo,
      audited_by: req.body.audited_by,
      safety_score: req.body.safety_score,
      price: req.body.price,
      marketcap: req.body.marketcap,
      onboard_date: req.body.onboard_date,
      tags: req.body.tags,
      socials: req.body.socials,
      description: req.body.description,
      verified: req.body.verified,
      audit_available: req.body.audit_available,
      github: req.body.github,
      platform: req.body.platform,
      language: req.body.language,
      contract_addr: req.body.contract_addr,
      token: req.body.token,
      member: req.body.member,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Project was created successfully." });
    }
  );
};

updateProject = async (req, res) => {};

deleteProject = async (req, res) => {};

getProjects = async (req, res) => {
  await AuditProject.find(req.query, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }
    return res.status(200).json({ success: true, data: project });
  })
    .clone()
    .catch((err) => console.error(err));
};

getLatestProjects = async (req, res) => {
  // {}, {}, { sort: { 'created_at': -1 } }
  await AuditProject.find({}, {}, { sort: { created_at: -1 } }, (err, projects) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!projects) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    let indexs = [];

    projects.forEach((article, index) => {
      indexs.push(article._id);
    });
    return res.status(200).json({ success: true, data: indexs });
  })
    .clone()
    .catch((err) => console.error(err));
};

getProjectsByField = async (req, res) => {
  var { field, value } = req.query;
  var regex = { $regex: ".*" + value + ".*" };
  var query = {};
  query[field] = regex;
  await AuditProject.find(query, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, data: project });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createProject,
  getProjects,
  getLatestProjects,
  getProjectsByField,
};
