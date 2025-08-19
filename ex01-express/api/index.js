
import "dotenv/config";
import express from "express";

console.log("Olá, Professor!");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Ewayrton");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});