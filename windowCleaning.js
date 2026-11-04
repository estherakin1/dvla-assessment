import {
  findCustomersWithTargetDate,
  findwindowCountwithCustomerNumber,
  calculculateTotalWindows,
  findCustomersWithTargetBookingNumber,
  findCustomerWindowCount,
} from "./functions/calculationfunctions.js";

/*
Feature 1 

Calculate the total quantity of windows that will 
be cleaned on a specified date e.g. 2025-10-01
*/
const targetDate = "2025-10-01";

// Step 1: Find all customers booked on the target date
const targetCustomers = findCustomersWithTargetDate(targetDate);

// Step 2: Find the window counts for those customers
const windowCounts = findwindowCountwithCustomerNumber(targetCustomers);

// Step 3: Calculate the total number of windows
const totalWindowCount = calculculateTotalWindows(windowCounts);

console.log(
  `The total quantity of windows for ${targetDate} is ${totalWindowCount}`,
);

/*
Feature 2

The window cleaner charges: £5 per property + £1 per window
Calculate the total cost for a specified booking number.
*/
const targetBookingNumber = 2;

// Step 1: Find customer with target booking Number
const targetCustomer =
  findCustomersWithTargetBookingNumber(targetBookingNumber);

// Step 2: Calculate the total number of windows associated with the booking
const numberOfWindows = findCustomerWindowCount(targetCustomer);

//Step 3: Calculate the toal if the window cleaner charges: £5 per property + £1 per window
if (targetCustomer === null) {
  console.log(`Booking number ${targetBookingNumber} not found.`);
} else if (targetCustomer === undefined) {
  console.log(`Booking number ${targetBookingNumber} has no customer ID.`);
} else if (numberOfWindows === null) {
  console.log(
    `Customer ${targetCustomer} not found for booking number ${targetBookingNumber}.`,
  );
} else {
  const totalCost = numberOfWindows + 5;

  console.log(
    `The total cost for booking ${targetBookingNumber} is £${totalCost}`,
  );
}
