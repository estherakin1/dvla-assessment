import { customerBookings } from "../testData/customerBookings.js";
import { customers } from "../testData/customers.js";

function findCustomersWithTargetDate(targetDate) {
  //get array of all the customer booked in on target date
  const targetCustomers = customerBookings
    .filter((item) => item.date === targetDate)
    .map((item) => item.customerNumber);

  return targetCustomers;
}

function findwindowCountwithCustomerNumber(targetCustomers) {
  const windowCount = customers
    .filter((item) => targetCustomers.includes(item.customerNumber))
    .map((item) => item.windows);
  return windowCount;
}

function calculculateTotalWindows(windowCount) {
  const totalWindowCount = windowCount.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return totalWindowCount;
}

function findCustomersWithTargetBookingNumber(targetBookingNumber) {
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
  findCustomersWithTargetDate,
  findwindowCountwithCustomerNumber,
  calculculateTotalWindows,
  findCustomersWithTargetBookingNumber,
  findCustomerWindowCount,
};
