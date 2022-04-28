import express from "express";
import bodyParser from "body-parser";
import indexRouter from "./scr/routes/index.js";
import { toDoItems } from "./scr/models/todoitems.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRouter);

app.get("/task", (req, res) => {
  return res.json({ data: toDoItems, status: "success" });
});

app.post("/task", (req, res) => {
  toDoItems.push({
    index: getItemIndex(toDoItems),
    value: req.body.value,
    done: false,
  });
  return res.json({ data: toDoItems, status: "success" });
});

app.delete("/task/:id", (req, res) => {
  let toDoItems = toDoItems.filter((d) => d.index != +req.params.id);
  return res.json({ data: toDoItems, status: "success" });
});

app.patch("/task/:id", (req, res) => {
  toDoItems.filter((d) => d.index == +req.params.id)[0].done = req.body.done;
  return res.json({ data: toDoItems, status: "success" });
});

app.listen(8000, () => console.log(`Example app running!`));
