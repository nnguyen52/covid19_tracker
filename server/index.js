require("dotenv").config();
const express = require("express");
const cors = require("cors");

const route = require("./routes/route");

const app = express();
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("server running");
});
app.use("/api/", route);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
