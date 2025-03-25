const students = [
    {
        "id": "e5567b",
        "firstname": "Beatrice",
        "lastname": "Worsley",
        "age": 38,
        "image": "https://randomuser.me/api/portraits/women/1.jpg",
        "location": "Toronto, Canada"
      },
      {
        "id": "e4976c",
        "firstname": "Claudie",
        "lastname": "Haigneré",
        "age": 50,
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "location": "Paris, France"
      },
      {
        "id": "e1232b",
        "firstname": "Barbara",
        "lastname": "Chase",
        "age": 45,
        "image": "https://randomuser.me/api/portraits/women/3.jpg",
        "location": "New York, USA"
      },
      {
        "id": "e9886a",
        "firstname": "Anaïs",
        "lastname": "Nin",
        "age": 42,
        "image": "https://randomuser.me/api/portraits/women/4.jpg",
        "location": "Barcelona, Spain"
      },
      {
        "id": "e9845b",
        "firstname": "Bella",
        "lastname": "Guerin",
        "age": 35,
        "image": "https://randomuser.me/api/portraits/women/5.jpg",
        "location": "Melbourne, Australia"
      },
      {
        "id": "e9875c",
        "firstname": "Clara",
        "lastname": "Zetkin",
        "age": 60,
        "image": "https://randomuser.me/api/portraits/women/6.jpg",
        "location": "Berlin, Germany"
      },
      {
        "id": "e5412f",
        "firstname": "Fatoumata",
        "lastname": "Kébé",
        "age": 30,
        "image": "https://randomuser.me/api/portraits/women/7.jpg",
        "location": "Dakar, Senegal"
      }
];

// Données des notes (séparées des étudiants)
const grades = {
    "e5567b": [
      { "value": 14, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 16, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 12, "subject": "Informatique", "teacher": "M. Bernard" },
      { "value": 17, "subject": "Anglais", "teacher": "Mme Dubois" }
    ],
    "e4976c": [
      { "value": 18, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 15, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 13, "subject": "Histoire", "teacher": "M. Rousseau" },
      { "value": 19, "subject": "Philosophie", "teacher": "Mme Voltaire" },
      { "value": 16, "subject": "Anglais", "teacher": "Mme Dubois" }
    ],
    "e1232b": [
      { "value": 10, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 12, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 14, "subject": "Informatique", "teacher": "M. Bernard" },
      { "value": 9, "subject": "Histoire", "teacher": "M. Rousseau" },
      { "value": 11, "subject": "Philosophie", "teacher": "Mme Voltaire" }
    ],
    "e9886a": [
      { "value": 16, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 15, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 14, "subject": "Histoire", "teacher": "M. Rousseau" },
      { "value": 18, "subject": "Philosophie", "teacher": "Mme Voltaire" },
      { "value": 17, "subject": "Anglais", "teacher": "Mme Dubois" },
      { "value": 16, "subject": "Informatique", "teacher": "M. Bernard" }
    ],
    "e9845b": [
      { "value": 11, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 14, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 13, "subject": "Histoire", "teacher": "M. Rousseau" }
    ],
    "e9875c": [
      { "value": 19, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 17, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 16, "subject": "Informatique", "teacher": "M. Bernard" },
      { "value": 18, "subject": "Histoire", "teacher": "M. Rousseau" },
      { "value": 17, "subject": "Philosophie", "teacher": "Mme Voltaire" },
      { "value": 19, "subject": "Anglais", "teacher": "Mme Dubois" },
      { "value": 18, "subject": "Science", "teacher": "M. Einstein" }
    ],
    "e5412f": [
      { "value": 12, "subject": "Mathématiques", "teacher": "M. Dupont" },
      { "value": 15, "subject": "Physique", "teacher": "Mme Lefèvre" },
      { "value": 14, "subject": "Histoire", "teacher": "M. Rousseau" },
      { "value": 13, "subject": "Anglais", "teacher": "Mme Dubois" },
      { "value": 15, "subject": "Science", "teacher": "M. Einstein" },
      { "value": 17, "subject": "Philosophie", "teacher": "Mme Voltaire" }
    ]
  };

// Calculer la moyenne d'un étudiant
function calculateStudentAverage(studentId) {
    const studentGrades = grades[studentId] || [];
    if (studentGrades.length === 0) return "N/A";
    
    const total = studentGrades.reduce((sum, g) => sum + g.value, 0);
    return (total / studentGrades.length).toFixed(2);
}

// Calculer la moyenne de la classe
function calculateClassAverage() {
    let totalSum = 0, totalCount = 0;
    Object.values(grades).forEach(studentGrades => {
        studentGrades.forEach(grade => {
            totalSum += grade.value;
            totalCount++;
        });
    });
    return (totalCount > 0) ? (totalSum / totalCount).toFixed(2) : "N/A";
}

// Affichage de la liste des étudiants
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("class-average").textContent = calculateClassAverage();

    const studentList = document.getElementById("student-list");
    students.forEach(student => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = student.image;
        img.alt = `Photo de ${student.firstname} ${student.lastname}`;

        const a = document.createElement("a");
        a.textContent = `${student.firstname} ${student.lastname} (Moyenne: ${calculateStudentAverage(student.id)}/20)`;
        a.href = "#";
        a.onclick = () => loadStudentDetails(student.id);

        li.appendChild(img);
        li.appendChild(a);
        studentList.appendChild(li);
    });
});

// Charger les détails d'un étudiant
function loadStudentDetails(id) {
    const student = students.find(s => s.id === id);
    document.getElementById("student-name").textContent = `${student.firstname} ${student.lastname}`;
    document.getElementById("student-image").src = student.image;
    document.getElementById("student-age").textContent = student.age;
    document.getElementById("student-location").textContent = student.location;
    document.getElementById("student-average").textContent = `${calculateStudentAverage(id)}/20`;
    document.getElementById("student-average").dataset.id = id;

    document.getElementById("student-list").classList.add("hidden");
    document.getElementById("student-details").classList.remove("hidden");
}

// Afficher les notes détaillées d'un étudiant
function showGrades(event) {
    event.preventDefault();
    const studentId = event.target.dataset.id;
    const gradesTable = document.getElementById("grades-table");
    const gradesBody = document.getElementById("grades-body");

    gradesBody.innerHTML = "";
    (grades[studentId] || []).forEach(grade => {
        const row = `<tr><td>${grade.subject}</td><td>${grade.value}/20</td><td>${grade.teacher}</td></tr>`;
        gradesBody.innerHTML += row;
    });

    gradesTable.classList.toggle("hidden");
}

// Retour à la liste des étudiants
function goBack() {
    document.getElementById("student-list").classList.remove("hidden");
    document.getElementById("student-details").classList.add("hidden");
}