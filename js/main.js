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

let activeCategory = "all";

function renderSkills() {
  listEl.innerHTML = "";

  for (const skill of SKILLS) {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    if (!matchesCategory) {
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
  }
}

renderSkills();
