
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables from .env file
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: null }); // Render the initial page
});


app.post("/joke", async (req, res) => {
  try {
    const categoryOption = req.body.category;
    const languageOption = req.body.language;
    const blacklistOption = req.body.blacklist;
    const joketypeOption = req.body.joketype;

    const response = await axios.get(
      `${process.env.API_URL}/${categoryOption}${(languageOption || blacklistOption || joketypeOption) ? '?' : ''}${languageOption ? `lang=${languageOption}` : ''}${languageOption && (blacklistOption || joketypeOption) ? '&' : ''}${blacklistOption ? `blacklistFlags=${blacklistOption}` : ''}${blacklistOption && joketypeOption ? '&' : ''}${joketypeOption ? `type=${joketypeOption}` : ''}`
    );
    console.log("API URL:", response);
    const result = response.data;

    const apiUrl = response.config.url; // Get the API URL from the Axios response

    res.render("index.ejs", {
      data: result,
      apiUrl: apiUrl, // Pass the apiUrl variable to the template
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});