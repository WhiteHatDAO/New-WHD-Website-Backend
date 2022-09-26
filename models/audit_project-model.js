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

const Insurance = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true }
})

const AuditProject = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    audited_by: { type: Array, required: false },
    safety_score: { type: Number, required: false },
    price: { type: Number, required: false },
    market: { type: Number, required: true },
    onboard_date: { type: Date, required: true },
    tags: { type: Array, required: true },
    socials: { type: Socials, required: true },
    description: { type: String, required: false },
    verified: { type: Boolean, required: true },
    platform: { type: String, required: false },
    language: { type: String, required: false },
    contract_addr: { type: Array, required: true },
    member: { type: Array, required: true },
    codebase: { type:String, required: true },
    circle_text: { type: String, required: true },
    circle_subtext: { type: String, required: true },
    bottom_link: { type: String, required: true },
    contract_audits: { type: Array, required: false },
    platform_audits: { type: Array, required: true },
    bug_bounty: { type: Array, required: true },
    insurance: { type: Insurance, required: true },
    distribution: { type: String, required: true },
    distribution_list: { type: Array, required: true },
    security_text: {type: String, required: true},
    security_list: {type: Array, required: true},
    audited_files_text: { type: String, required: true },
    audited_files_list: { type: Array, required: true },
    metho: { type: String, required: true },
    methodology_tags: { type: Array, required: true },
    token_title: { type: String, required: true },
    token_name: { type: String, required: true },
    token: { type: String, required: true },
    market_api: { type: String, required: true },
    team_title: { type: String, required: true },
    team_note: { type: String, required: true },
    disclaimer: { type: String, required: true },
    disclaimer_text: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("audit_project", AuditProject);
