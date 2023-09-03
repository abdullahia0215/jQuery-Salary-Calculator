document.addEventListener('DOMContentLoaded', function() {
  // Get references to the necessary elements
  const employeeForm = document.getElementById('employee-form'); // The employee form
  const employeesList = document.getElementById('employees-list'); // The container for employee entries
  const totalMonthlyCost = document.getElementById('total-monthly-cost'); // The element to display the total monthly cost

  let monthlyCost = 0; // Variable to keep track of the total monthly cost

  // Event listener for when the employee form is submitted
  employeeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
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

    // Create a new employee entry element
    const employeeEntry = document.createElement('div');
    employeeEntry.innerHTML = `
      <p>${firstName} ${lastName}</p>
      <p>ID: ${idNumber}</p>
      <p>Job Title: ${jobTitle}</p>
      <p>Annual Salary: $${annualSalary}</p>
      <button class="delete-btn">Delete</button>
    `;

    // Append the employee entry to the employees list
    employeesList.appendChild(employeeEntry);

    // Update the total monthly cost
    monthlyCost += annualSalary / 12;
    totalMonthlyCost.textContent = `Total Monthly Cost: $${monthlyCost.toFixed(2)}`;

    // Check if the total monthly cost exceeds $20000 and apply styling if necessary
    if (monthlyCost > 20000) {
      totalMonthlyCost.style.backgroundColor = 'red';
    }

    // Reset the form inputs
    employeeForm.reset();
  });

  // Event listener for deleting an employee entry
  employeesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
    }
  });
});