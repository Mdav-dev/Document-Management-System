import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var warn = "";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render(__dirname + "/views/index.ejs", {warn});
});

app.get("/about", (req, res) => {
		res.render(__dirname + "/views/file-editor.ejs");
	
});

app.post("/dashboard", (req, res) =>{
	var user_email = req.body["email"];
	var user_password = req.body["password"];
	warn = "You entered the wrong password";
	if (user_password == "Mdavid5099"){
		res.render(__dirname + "/views/dashboard.ejs");
	}else{
		res.render(__dirname + "/views/index.ejs", {warn});
	}
	

})


app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
