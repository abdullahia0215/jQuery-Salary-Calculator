$(document).ready(function() {
  // Get references to the necessary elements
  const $employeeForm = $('#employee-form'); // The employee form
  const $employeesList = $('#employees-list'); // The container for employee entries
  const $totalMonthlyCost = $('#total-monthly-cost'); // The element to display the total monthly cost

  let monthlyCost = 0; // Variable to keep track of the total monthly cost

  // Event listener for when the employee form is submitted
  $employeeForm.on('submit', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const idNumber = $('#id-number').val();
    const jobTitle = $('#job-title').val();
    const annualSalary = parseInt($('#annual-salary').val());

    const employee = {
      firstName,
      lastName,
      idNumber,
      jobTitle,
      annualSalary
    };

    // Create a new employee entry element
    const employeeEntry = $('<div></div>');
    employeeEntry.data('employeeData', employee); // Store employee data using .data()

    // Build the HTML for the employee entry
    const entryHtml = `
      <p>${firstName} ${lastName}</p>
      <p>ID: ${idNumber}</p>
      <p>Job Title: ${jobTitle}</p>
      <p>Annual Salary: $${annualSalary}</p>
      <button class="delete-btn">Delete</button>
    `;
    employeeEntry.html(entryHtml);

    // Append the employee entry to the employees list
    $employeesList.append(employeeEntry);

    // Update the total monthly cost
    monthlyCost += annualSalary / 12;
    $totalMonthlyCost.text(`Total Monthly Cost: $${monthlyCost.toFixed(2)}`);

    // Check if the total monthly cost exceeds $20000 and apply styling if necessary
    if (monthlyCost > 20000) {
      $totalMonthlyCost.css('background-color', 'red');
    }

    // Reset the form inputs
    $employeeForm[0].reset();
  });

  // Event listener for deleting an employee entry
  $employeesList.on('click', '.delete-btn', function(event) {
    const $employeeEntry = $(this).parent();
    const employeeData = $employeeEntry.data('employeeData'); // Retrieve employee data using .data()
    const annualSalary = employeeData.annualSalary;

    $employeeEntry.remove();

    // Update the total monthly cost
    monthlyCost -= annualSalary / 12;
    $totalMonthlyCost.text(`Total Monthly Cost: $${monthlyCost.toFixed(2)}`);

    // Check if the total monthly cost is below $20000 and remove styling if necessary
    if (monthlyCost <= 20000) {
      $totalMonthlyCost.css('background-color', '');
    }
  });
});