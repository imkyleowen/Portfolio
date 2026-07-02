const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const projectsGrid = document.getElementById("projectsGrid");
const year = document.getElementById("year");
const projectModalLabel = document.getElementById("projectModalLabel");
const projectModalBody = document.getElementById("projectModalBody");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

year.textContent = new Date().getFullYear();

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const techItems = project.technologies
    .map((tech) => `<span>${tech}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-image${project.coverImage ? ' has-image' : ''}">${project.coverImage ? `<img src="${project.coverImage}" alt="${project.title}">` : project.type}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tech-list">${techItems}</div>
    <div class="project-links">
      <button type="button" class="project-view-btn" data-project-index="${index}" data-bs-toggle="modal" data-bs-target="#projectModal">
        <i class="bi bi-eye-fill"></i> View Project
      </button>
    </div>
  `;

  projectsGrid.appendChild(card);
});

document.querySelectorAll(".project-view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.projectIndex];
    const techItems = project.technologies.map((tech) => `<span>${tech}</span>`).join("");
    const featureItems = project.features.map((feature) => `<li>${feature}</li>`).join("");

    const galleryItems = project.gallery
      ? project.gallery.map((item) => `
          <figure class="project-gallery-item">
            <img src="${item.src}" alt="${item.label}">
            <figcaption>${item.label}</figcaption>
          </figure>
        `).join("")
      : "";

    projectModalLabel.innerHTML = `<i class="bi bi-kanban-fill"></i> ${project.title}`;
    projectModalBody.innerHTML = `
      ${project.coverImage ? `
        <div class="project-cover-banner" style="background-image: linear-gradient(90deg, rgba(15,23,42,.92), rgba(15,23,42,.55)), url('${project.coverImage}')">
          <div class="project-cover-content">
            <p class="eyebrow">${project.type}</p>
            <h3>${project.title}</h3>
            <div class="tech-list">${techItems}</div>
            <div class="project-action-row">
              ${project.websiteLink ? `<a href="${project.websiteLink}" target="_blank" rel="noopener" class="btn primary"><i class="bi bi-globe2"></i> View Website</a>` : `<a href="${project.coverImage}" target="_blank" class="btn secondary"><i class="bi bi-image-fill"></i> View Screenshot</a>`}
            </div>
          </div>
        </div>
      ` : `
        <div class="project-detail-header">
          <div class="project-image project-detail-image">${project.type}</div>
          <div>
            <p class="eyebrow">${project.type}</p>
            <h3>${project.title}</h3>
            <p>${project.overview}</p>
          </div>
        </div>
      `}
      <div class="project-detail-section">
        <h4>Project Overview</h4>
        <p>${project.overview}</p>
      </div>
      <div class="project-detail-section">
        <h4>Technologies Used</h4>
        <div class="tech-list">${techItems}</div>
      </div>
      <div class="project-detail-section">
        <h4>Project Features</h4>
        <ul>${featureItems}</ul>
      </div>
      ${galleryItems ? `
        <div class="project-detail-section">
          <h4>Project Gallery</h4>
          <div class="project-gallery">${galleryItems}</div>
        </div>
      ` : ""}
      <div class="project-detail-section">
        <h4>My Role</h4>
        <p>${project.role}</p>
      </div>
    `;
  });
});
