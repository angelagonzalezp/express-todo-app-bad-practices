class item {
  constructor(index, value, done) {
    this.index = index;
    this.value = value;
    this.done = done;
  }
}

function getItemIndex(toDoItems) {
  const index = toDoItems.length + 1;
  return index;
}

export { item, getItemIndex };
