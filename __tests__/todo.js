/* eslint-disable no-undef */
const some_varList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = some_varList();

describe("some_var list getting Tested", () => {
  beforeAll(() => {
    add({
      title: "Bring atta and complete 2 leetcode problems",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding a new some_var in the list", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "complete code with harry video 76",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking this some_var as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieving all some_vars that are over due", () => {
    let listOfsome_vars = overdue();

    expect(
      listOfsome_vars.every((some_var) => {
        return some_var.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieving all some_vars that are due for today", () => {
    let listOfsome_vars = dueToday();

    expect(
      listOfsome_vars.every((some_var) => {
        return some_var.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieving all some_vars that are due for later", () => {
    let listOfsome_vars = dueLater();

    expect(
      listOfsome_vars.every((some_var) => {
        return some_var.dueDate > today;
      })
    ).toBe(true);
  });
});
