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

  });
});