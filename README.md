# dvla-assessment

Overview

This repository contains my solution to the DVLA Senior Software Development Engineer in Test coding assessment.

Progamming Language

Node.js

Running the application

Clone the repository and run:

npm install
npm start

'node windowCleaning.js' in terminal will run the code

Coding Exercise – Part 1 (GD&D Programming & Build - practitioner)

A window cleaner is setting up a computerised customer and booking system.

They need to store data about their customers:

Customers

| Customer Number | Name   | Windows |
| --------------- | ------ | ------- |
| 1               | John   | 10      |
| 2               | Paul   | 5       |
| 3               | Ringo  | 12      |
| 4               | George | 4       |

Customer Bookings

And the bookings that each customer would like to make.

| Booking Number | Customer Number | Date       |
| -------------- | --------------- | ---------- |
| 1              | 4               | 2025-10-01 |
| 2              | 2               | 2026-01-10 |
| 3              | 1               | 2025-10-01 |
| 4              | 3               | 2025-10-01 |

In your chosen language create a suitable in memory object/structure to store such data.

You should not build a user interface or use a database as part of this exercise.

- You should not create OpenAPI (or similar) contract or a HTTP API interface

- You should interact with your code using your IDE or command line to execute the code or tests.

- You can use unit tests to demonstrate the execution of your code.

You may use any reasonable general-purpose programming language to implement your solution. (Your audience will be unlikely to understand deliberately esoteric and obfuscatory toy languages, e.g., Malbolge.)

Once you have expressed the data in your language implement the following two features.

Feature 1 Calculate the total quantity of windows that will be cleaned on a specified date e.g. 2025-10-01

Feature 2

The window cleaner charges: £5 per property + £1 per window

Calculate the total cost for a specified booking number.

### Adding, Removing and Updating Data

| Action             | JavaScript Method                             | Example                      |
| ------------------ | --------------------------------------------- | ---------------------------- |
| Add                | `push()`                                      | `customers.push(customer)`   |
| Remove last item   | `pop()`                                       | `customers.pop()`            |
| Remove by position | `splice()`                                    | `customers.splice(index, 1)` |
| Update             | Find item, then assign new value              | `customer.name = "Smith"`    |
| Delete             | `delete` keyword (not recommended for arrays) | `delete customers[0]`        |
