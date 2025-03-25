document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3010/api/students")
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
    fetch(`http://localhost:3010/api/student/${id}`)
        .then(response => response.json())
        .then(student => {
            document.getElementById("student-name").textContent = `${student.firstname} ${student.lastname}`;
            document.getElementById("student-image").src = student.image;
            document.getElementById("student-age").textContent = student.age;
            document.getElementById("student-location").textContent = student.location;
            document.getElementById("student-list").classList.add("hidden");
            document.getElementById("student-details").classList.remove("hidden");

            const averageGradeDetailBtn = document.getElementById("average-grade-detail");
            // Clear event listener
            averageGradeDetailBtn.replaceWith(averageGradeDetailBtn.cloneNode(true))
            document.getElementById("average-grade-detail").addEventListener("click", () => { 
                console.log(id)
            });
        })
        .catch(error => console.error("Erreur lors du chargement des détails de l'étudiant:", error));
}

function goBack() {
    document.getElementById("student-list").classList.remove("hidden");
    document.getElementById("student-details").classList.add("hidden");
}

function loadStudentAverageGrade(id) {
    fetch(`http://localhost:3020/api/grades/${id}/average`)
        .then(response => response.json())
        .then(grade => {
            const averageGradeItem = document.getElementById(`student-average-grade`);
            averageGradeItem.textContent = `Average grade : ${grade.average}`;
            averageGradeItem.classList.remove("hidden")
        })
        .catch(error => {
            console.error("Erreur lors du chargement de la moyenne de l'étudiant:", error);
            document.getElementById(`student-average-grade`).classList.add("hidden")
        });
}

function onAverageGradeClick(id) {
        console.log(id); 
}