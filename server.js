const express = require("express");
const fs = require("fs");
const path = require("path");

const fileReader = require("./fileReader");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'))

const port = 5500;

app.get("/", (req, res) => {
  res.render(path.join(`${__dirname}/views/index.ejs`));
});

app.get("/pizza/list", (req, res) => {
  res.render(path.join(`${__dirname}/views/pizzaList.ejs`));
});
app.get("/pizza/list", (req, res) => {
  res.render(path.join(`${__dirname}/views/order.ejs`));
});

app.get("/api/pizza", async (req, res) => {

  const fileData = await fileReader(path.join(`${__dirname}/pizza.json`));
  res.send(fileData);
});

app.get("/api/allergens", async (req, res) => {

  const fileData = await fileReader(path.join(`${__dirname}/allergens.json`));
  res.send(fileData);

});
app.get("/api/order", (req, res) => {
  const fileContent = fs
    .readFileSync(path.join(__dirname, "/views/order.ejs"))
    .toString();
  // console.log(fileContent);
  res.send(fileContent);
});
let id = 0;
app.post("/api/order", (req, res) => {
  
  const { name, email, city, street } = req.body;
  const { authorization } = req.headers;
  id++;
  response = {
    id:id,
    name:name,
    email:email,
    city:city,
    street:street,
  };
  
  // if (file.length == 0) {
    //   //add data to json file
    //   fs.writeFileSync("order.json", JSON.stringify(response));
    // } else {
      //append data to jso file
      //   console.log(json)
      //   //add json element to json object
      
      //    fs.writeFileSync("order.json", JSON.stringify(response));
      // }
      fs.appendFile("./order.json", JSON.stringify(response), "utf-8", (err) => {
      const file = fs.readFileSync("order.json");
      const json = JSON.parse(file.toString());
      if (err) {
        throw err;
      }
     
    })
  }
 
  
);

app.listen(port, _ => console.log(`http://127.0.0.1:${port}`));