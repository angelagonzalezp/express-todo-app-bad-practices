// === imports == //
import express from "express";
import bodyParser from "body-parser";
import indexRouter from "./scr/routes/index.js";
import { toDoItems } from "./scr/models/todoitems.js";

// === initialisation == //
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// === endpoints == //
// index endpoint
app.use("/", indexRouter);

// get all tasks
app.get("/task", (req, res) => {
  return res.json({ data: toDoItems, status: "success" });
});

// create a task
app.post("/task", (req, res) => {
  toDoItems.push({
    index: getItemIndex(toDoItems),
    value: req.body.value,
    done: false,
  });
  return res.json({ data: toDoItems, status: "success" });
});

// delete a task
app.delete("/task/:id", (req, res) => {
  let toDoItems = toDoItems.filter((d) => d.index != +req.params.id);
  return res.json({ data: toDoItems, status: "success" });
});

// update a task
app.patch("/task/:id", (req, res) => {
  toDoItems.filter((d) => d.index == +req.params.id)[0].done = req.body.done;
  return res.json({ data: toDoItems, status: "success" });
});

// === run app == //
app.listen(8000, () => console.log(`Example app running!`));
