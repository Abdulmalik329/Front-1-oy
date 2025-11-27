const form = document.getElementById("todoForm");
const root = document.getElementById("root");

let todos = JSON.parse(localStorage.getItem("todo_list")) || [];

const render = () => {
  root.innerHTML = "";

  if (todos.length) {
    todos.map((todo) => {
      root.innerHTML += `
        <div class="mb-3 border border-slate-500 text-slate-500 p-2 rounded shadow bg-slate-200">
            <p>${todo.title}</p>
            <p class="te xt-xs">${moment(todo.createdAt).format(
              "MMM DD | HH:mm"
            )}</p>
        </div>
      `;
    });
  } else {
    root.innerHTML =
      '<div class="text-center bg-slate-200 text-slate-500 border py-4">No data</div>';
  }
};

form.onsubmit = (e) => {
  e.preventDefault();
  
  const newTodo = {
    id: Date.now(),
    title: e.target.bobik.value,
    createdAt: Date.now(),
    completed: false,
  };

  todos.push(newTodo);

  localStorage.setItem("todo_list", JSON.stringify(todos)); 

  render();
  e.target.reset();
};

document.body.onload = () => render();
