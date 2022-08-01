const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Member = new Schema({
    name: { type: String, required: true },
    pfp: { type: String, required: true },
    role: { type: String, required: true },
    socials: { type: String, required: true },
    address: { type: String, required: true },
    verified: { type: Boolean, required: true },
})

const AuditProject = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    audited_by: { type: String, required: false },
    safety_score: { type: Number, required: false },
    price: { type: Number, required: false },
    marketcap: { type: String, required: true },
    onboard_date: { type: Date, required: true },
    tags: { type: String, required: true },
    socials: { type: String, required: true },
    description: { type: String, required: false },
    verified: { type: Boolean, required: true },
    audit_available: { type: Boolean, required: true },
    github: { type: String, required: false },
    platform: { type: String, required: false },
    language: { type: String, required: false },
    contract_addr: { type: String, required: true },
    token: { type: String, required: true },
    member: { type: Array, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("audit_project", AuditProject);