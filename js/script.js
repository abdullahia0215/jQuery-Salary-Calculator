document.addEventListener('DOMContentLoaded', function() {
  const employeeForm = document.getElementById('employee-form');
  const employeesList = document.getElementById('employees-list');
  const totalMonthlyCost = document.getElementById('total-monthly-cost');

  let monthlyCost = 0;

  employeeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const idNumber = document.getElementById('id-number').value;
    const jobTitle = document.getElementById('job-title').value;
    const annualSalary = parseInt(document.getElementById('annual-salary').value);

    const employee = {
      firstName,
      lastName,
      idNumber,
      jobTitle,
      annualSalary
    };

    const employeeEntry = document.createElement('div');
    employeeEntry.innerHTML = `
      <p>${firstName} ${lastName}</p>
      <p>ID: ${idNumber}</p>
      <p>Job Title: ${jobTitle}</p>
      <p>Annual Salary: $${annualSalary}</p>
      <button class="delete-btn">Delete</button>
    `;

    employeesList.appendChild(employeeEntry);

    monthlyCost += annualSalary / 12;
    totalMonthlyCost.textContent = `Total Monthly Cost: $${monthlyCost.toFixed(2)}`;

    if (monthlyCost > 20000) {
      totalMonthlyCost.style.backgroundColor = 'red';
    }

    employeeForm.reset();
  });

  employeesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
    }
  });
});