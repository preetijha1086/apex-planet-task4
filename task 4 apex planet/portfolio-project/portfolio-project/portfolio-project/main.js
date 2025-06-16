// ========== TO-DO LIST ==========
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.style.textDecoration = task.done ? "line-through" : "none";
    li.onclick = () => toggleTask(index);
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

window.addEventListener("DOMContentLoaded", renderTasks);



function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  sortAndDisplay(filtered);
}

function sortProducts() {
  filterProducts(); // Sorting is applied on the filtered list
}

function sortAndDisplay(list) {
  const sort = document.getElementById("sortOptions").value;
  let sorted = [...list];
  if (sort === "priceLow") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(sorted);
}

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
