require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const authRouter = require("./routers/authRouter");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

async function start() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tynsb.mongodb.net/post-app?retryWrites=true&w=majority`
  );
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start().catch((err) => console.log(err));
