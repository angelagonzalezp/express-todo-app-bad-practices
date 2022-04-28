import { item, getItemIndex } from "./item.js";

let toDoItems = [];
const values = ["learn react", "Go shopping", "buy flowers"];

for (let i = 0; i < 3; i++) {
  toDoItems.push(new item(getItemIndex(toDoItems), values[i], false));
}

export { toDoItems };
