import express from "express";
import dot from "dotenv";
dot.config();
import { MongoClient } from "mongodb";
import userRouter from "./routes/user.route.js";
import UsersDB from "./data/user.DAO.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

MongoClient.connect(process.env.MONGO_URI, {
  retryWrites: true,
  w: "majority",
})
  .then(async (client) => {
    await UsersDB.injectDB(client);
    app.listen(PORT, () => {
      console.log(`hello world at ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
