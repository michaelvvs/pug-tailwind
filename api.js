const express = require("express");
const router = express.Router();
// const formidable = require("formidable");
// const fs = require("fs");
// const path = require("path");
const Post = require("./post");
// const bodyParser = require("body-parser");


router.post("/", (req, res) => {
	const content = req.body.content;
	Post.create({
		content: content
	}).then(() => {
		res.redirect("/");
	});
});


/* router.post("/", (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		const f = files.fileToUpload;
		const newpath = path.join("C:\\Users\\herbe\\OneDrive\\Desktop\\", f.name);
		fs.rename(f.path, newpath, err => {
			if (err) throw err;
			res.send("File uploaded and moved".toUpperCase());
		});
	});
}); */

module.exports = router;