const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  res.send("done");
});
router.get("/getCountries", (req, res) => {
  axios
    .get("https://countryapi.gear.host/v1/Country/getCountries")
    .then((response) => {
      res.json({ success: true, data: response.data });
    });
});

module.exports = router;
