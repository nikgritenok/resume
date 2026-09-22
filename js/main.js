const SKILLS = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "Nuxt", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Figma", category: "tools" },
];

const CATEGORY_LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Инструменты",
};

const listEl = document.querySelector("#skills-list");
const emptyEl = document.querySelector("#skills-empty");
const searchEl = document.querySelector("#skills-search");
const filtersEl = document.querySelector("#skills-filters");

let activeCategory = "all";

function renderSkills() {
  const query = searchEl.value.trim().toLowerCase();
  listEl.innerHTML = "";
  let visibleCount = 0;

  for (const skill of SKILLS) {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesQuery = skill.name.toLowerCase().includes(query);
    if (!matchesCategory || !matchesQuery) {
      continue;
    }

    const item = document.createElement("li");
    item.className = "skills-list__item";

    const name = document.createElement("span");
    name.textContent = skill.name;

    const tag = document.createElement("span");
    tag.className = "skills-list__tag";
    tag.textContent = CATEGORY_LABELS[skill.category];

    item.append(name, tag);
    listEl.append(item);
    visibleCount += 1;
  }

  emptyEl.hidden = visibleCount > 0;
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }
  activeCategory = button.dataset.category;
  for (const b of filtersEl.querySelectorAll("button")) {
    b.classList.toggle("is-active", b === button);
  }
  renderSkills();
});

searchEl.addEventListener("input", renderSkills);

renderSkills();
