const express = require("express");
const dotenv = require("dotenv");
const filmRoutes = require("./routes/filmRoute");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000;

app.use("/movies", filmRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
