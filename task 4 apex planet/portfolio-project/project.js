document.addEventListener("DOMContentLoaded", () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing skills and projects using HTML, CSS, JavaScript."
    },
    {
      title: "To-Do List with LocalStorage",
      description: "A functional to-do list app that supports add, edit, delete, complete, and stores data in browser localStorage."
    },
    {
      title: "Product Filter Page",
      description: "A dynamic product page with category filters and sorting options (price/rating)."
    }
  ];

  const projectSection = document.getElementById("projects");
  const ul = document.createElement("ul");

  projectList.forEach(project => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
    ul.appendChild(li);
  });

  if (projectSection) {
    const existingList = projectSection.querySelector("ul");
    if (existingList) existingList.replaceWith(ul);
    else projectSection.appendChild(ul);
  }
});
