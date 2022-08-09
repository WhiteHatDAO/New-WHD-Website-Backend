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

const Socials = new Schema({
  twitter: {type: String, required: false},
  github: {type: String, required: false},
  discord: {type: String, required: false},
  medium: {type: String, required: false},
  web: {type: String, required: false},
  telegram: {type: String, required: false},
})

const AuditProject = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    audited_by: { type: Array, required: false },
    safety_score: { type: Number, required: false },
    price: { type: Number, required: false },
    market: { type: String, required: true },
    onboard_date: { type: Date, required: true },
    tags: { type: Array, required: true },
    socials: { type: Socials, required: true },
    description: { type: String, required: false },
    verified: { type: Boolean, required: true },
    audit_available: { type: Boolean, required: true },
    platform: { type: Array, required: false },
    language: { type: String, required: false },
    contract_addr: { type: String, required: true },
    token: { type: String, required: true },
    member: { type: Array, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("audit_project", AuditProject);
