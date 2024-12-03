// Fungsi untuk mengambil data JSON dan menampilkan di halaman
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects-list");

    // Mengambil data JSON dari URL
    fetch('https://pulpjetty.github.io/static-api/api/siapasaya.json')
        .then(response => response.json())
        .then(data => {
            // Menampilkan data tentang diri di bagian "About"
            document.getElementById("bio").textContent = data.bio;
            document.getElementById("profile-img").src = data.profile_image;

            // Menampilkan proyek-proyek di bagian "Projects"
            const projects = data.projects;
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;
                projectsSection.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            aboutSection.innerHTML = "<p>Error loading data...</p>";
        });
});
