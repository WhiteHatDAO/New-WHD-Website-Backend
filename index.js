const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connection, collections } = require("./db");
const projectRouter = require("./routes/audit_project-router");
const mainProRouter = require("./routes/main-pro-router");
const profileRouter = require("./routes/profile-router");

const app = express();
const apiPort = 4001;

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json());

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error: ")
);

app.get("/", (req, res) => {
  res.send({ name: "White Hat DAO API", version: "v2.0" });
});

app.use("/api", projectRouter);
app.use("/api", mainProRouter);
app.use("/api", profileRouter);


app.listen(process.env.PORT || apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
  console.log(`collections ${collections}`);
});
