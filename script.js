// Form submission code remains the same as before
document.getElementById('submitBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const marks = parseInt(document.getElementById('marks').value);

  const nameError = document.getElementById('nameError');
  const ageError = document.getElementById('ageError');
  const marksError = document.getElementById('marksError');
  const resultText = document.getElementById('result-text');

  nameError.textContent = '';
  ageError.textContent = '';
  marksError.textContent = '';

  let valid = true;

  if(!name || !/^[a-zA-Z\s]{2,}$/.test(name)) {
    nameError.textContent = 'Name must contain only letters and at least 2 characters.';
    valid = false;
  }
  if(isNaN(age) || age < 5 || age > 100) {
    ageError.textContent = 'Age must be a number between 5 and 100.';
    valid = false;
  }
  if(isNaN(marks) || marks < 0 || marks > 100) {
    marksError.textContent = 'Marks must be a number between 0 and 100.';
    valid = false;
  }

  if(!valid) return;

  const grade = calculateGrade(marks);
  const status = marks >= 50 ? "Pass ✅" : "Fail ❌";

  resultText.innerHTML = `
    <strong>${name}</strong> (Age: ${age})<br>
    Marks: ${marks}<br>
    Grade: <strong>${grade}</strong><br>
    Status: <span class="${marks >= 50 ? 'pass' : 'fail'}">${status}</span>
  `;

  if(grade === 'A+') {
    const li = document.createElement('li');
    li.innerHTML = `${name} (Age: ${age}) — Marks: ${marks}, Grade: <strong>${grade}</strong>`;
    document.getElementById('studentList').appendChild(li);
  }

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('marks').value = '';
});

function calculateGrade(marks) {
  if(marks >= 90) return 'A+ : 🌟  Excellent(Elon Musk)';
  if(marks >= 80) return 'A  :  😍  Very Good';
  if(marks >= 70) return 'B  :  😊  Not Bad(Welp)';
  if(marks >= 60) return 'C  :  😐  Could have tried Harder';
  if(marks >= 50) return 'D  :  😕  (Next Time HB) Below Average';
  return 'F  :  🤏  Fail (Skill Issue)';
}

// Dark/Light mode toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = '☀️ Light Mode';
  } else {
    themeBtn.textContent = '🌙 Dark Mode';
  }
});
