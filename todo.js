/* eslint-disable no-undef */
const some_varList = () => {
  all = [];
  const add = (some_varItem) => {
    all.push(some_varItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return all.filter((some_var) => {
      return some_var.dueDate < today;
    });
  };

  const dueToday = () => {
    return all.filter((some_var) => {
      return some_var.dueDate === today;
    });
  };

  const dueLater = () => {
    return all.filter((some_var) => {
      return some_var.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((some_var) => {
        display_status = some_var.completed ? "[x]" : "[ ]";
        display_date = some_var.dueDate == today ? "" : some_var.dueDate;

        return `${display_status} ${some_var.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = some_varList;

