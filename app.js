const express = require("express");
const app = express();
const upload = require("./config/multer");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index");
});

app.post('/upload', upload.single('file'),(req, res, next) => {
  console.log(req.body);
  res.send("file uploaded");
  
});
app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
