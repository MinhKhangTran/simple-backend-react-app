const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const API_ENDPOINT = "http://www.omdbapi.com/?t=";

exports.filmController = async (req, res) => {
  try {
    const { movie } = req.body;
    console.log(movie);

    const response = await fetch(
      `${API_ENDPOINT}${movie}&apikey=${process.env.API_KEY}`
    );
    console.log(`${API_ENDPOINT}${movie}&apikey=${process.env.API_KEY}`);
    const movies = await response.json();
    console.log(movies);
    return res.json({ movies });
  } catch (error) {
    console.log(error);
  }
};
