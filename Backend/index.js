import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

// try {
//   mongoose.connect(URI);
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log(error);
// }
// connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Middleware to parse JSON request bodies
app.use(express.json());

//routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
