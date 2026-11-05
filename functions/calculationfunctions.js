import { customerBookings } from "../testData/customerBookings.js";
import { customers } from "../testData/customers.js";

function findCustomersByTargetDate(targetDate) {
  //get array of all the customer booked in on target date
  const targetCustomers = customerBookings
    .filter((item) => item.date === targetDate)
    .map((item) => item.customerNumber);

  return targetCustomers;
}

function findWindowCountByCustomerNumber(targetCustomers) {
  const windowCount = targetCustomers.flatMap((customerNumber) =>
    customers
      .filter((item) => item.customerNumber === customerNumber)
      .map((item) => item.windows),
  );
  return windowCount;
}

function calculateTotalWindows(windowCount) {
  const totalWindowCount = windowCount.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return totalWindowCount;
}

function findCustomersByTargetBookingNumber(targetBookingNumber) {
  const targetCustomer = customerBookings.find(
    (customerBooking) => customerBooking.bookingNumber === targetBookingNumber,
  );

  if (!targetCustomer) {
    return null;
  }

  const customerId = targetCustomer.customerNumber;

  return customerId;
}

function findCustomerWindowCount(customerId) {
  const customerWindowCount = customers.find(
    (customer) => customer.customerNumber === customerId,
  );

  if (!customerWindowCount) {
    return null;
  }

  const numberOfWindows = customerWindowCount.windows;

  return numberOfWindows;
}

export {
  findCustomersByTargetDate,
  findWindowCountByCustomerNumber,
  calculateTotalWindows,
  findCustomersByTargetBookingNumber,
  findCustomerWindowCount,
};
