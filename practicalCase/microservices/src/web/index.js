const apiBaseUrl = "http://localhost:3010/api/";

document.addEventListener("DOMContentLoaded", function () {
    fetch(`${apiBaseUrl}students`)
        .then(response => response.json())
        .then(students => {
            const studentList = document.getElementById("student-list");
            students.forEach(student => {
                const li = document.createElement("li");
                const img = document.createElement("img");
                img.src = student.image;
                img.alt = `Photo de ${student.firstname} ${student.lastname}`;
                
                const a = document.createElement("a");
                a.textContent = `${student.firstname} ${student.lastname}`;
                a.href = "#";
                a.onclick = () => loadStudentDetails(student.id);
                
                li.appendChild(img);
                li.appendChild(a);
                studentList.appendChild(li);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des étudiants:", error));
});

function loadStudentDetails(id) {
    fetch(`${apiBaseUrl}student/${id}`)
        .then(response => response.json())
        .then(student => {
            document.getElementById("student-name").textContent = `${student.firstname} ${student.lastname}`;
            document.getElementById("student-image").src = student.image;
            document.getElementById("student-age").textContent = student.age;
            document.getElementById("student-location").textContent = student.location;
            document.getElementById("student-list").classList.add("hidden");
            document.getElementById("student-details").classList.remove("hidden");
        })
        .catch(error => console.error("Erreur lors du chargement des détails de l'étudiant:", error));
}

function goBack() {
    document.getElementById("student-list").classList.remove("hidden");
    document.getElementById("student-details").classList.add("hidden");
}
