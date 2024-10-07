import express from "express";
import connectDB from "./db/connect.js";
import { User } from "./model/user.model.js";
import cors from "cors";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error(error);
  });
app.post("/", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, address } = req.body;
  const data = new User({
    firstName,
    lastName,
    address,
  });

  data.save();
  res.send("data received    " + firstName);
});

// Search API
app.get("/search", async (req, res) => {
  try {
    console.log(req.query);
    const { firstName } = req.query;
    if (!firstName) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const searchResults = await User.find({ firstName: firstName });

    res.json(searchResults);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "An error occurred while searching" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
