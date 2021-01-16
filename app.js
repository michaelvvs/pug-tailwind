const express = require("express");
const app = express();
const port = 3000;
const apiRouter = require("./api");
const bodyParser = require("body-parser");
const Post = require("./post");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once("open", () => {
	console.log("db connected");
});

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
	Post.find({}).then(d => {
		res.render("index", {posts: d});
	});
});

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});