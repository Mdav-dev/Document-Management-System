import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render(__dirname + "/views/index.ejs");
});

app.get("/about", (req, res) => {
	res.render(__dirname + "/views/about.ejs");
});

app.get("/dashboard", (req, res) =>{
res.render(__dirname + "/views/dashboard.ejs");
})


app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});