const Url = require("../models/urlModel");
const nanoid = require("nanoid");
const valid = require("valid-url");

const shortenUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    //verify if its a website
    if (valid.isUri(longUrl) == undefined) {
      return res.status(400).json({ errorMessage: "Not a valid url." });
    }

    //if it exists, then just return the existing url data
    const existingUrl = await Url.findOne({ longUrl });
    if (existingUrl) {
      return res.json(existingUrl);
    }

    const urlCode = nanoid.nanoid(7);

    const shortUrl = "http://localhost:5000/" + urlCode;
    const newUrl = new Url({ longUrl, shortUrl, urlCode });
    await newUrl.save();
    res.json(newUrl);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const getUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    //req.params.code gets the code from http://localhost:5000/W2gEsZb

    if (url) {
      const newClick = url.clicks + 1;
      console.log(newClick);
      const news = await Url.findOneAndUpdate(
        { urlCode: req.params.code },
        { clicks: newClick }
      );

      return res.redirect(url.longUrl);
    } else {
      return res.status(400).json({ errorMessage: "No url found" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const getTopLinks = async (req, res) => {
  try {
    const urls = await Url.find({}).sort({ clicks: -1 }).limit(15);
    res.json(urls);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { shortenUrl, getUrl, getTopLinks };
