-- In the employee.sql file, write out the code for the following problems:

-- List all employee first and last names only that live in Calgary.

SELECT last_name, first_name FROM employee WHERE city = 'Calgary';

-- Find the birthdate for the youngest employee.

SELECT birth_date FROM employee ORDER BY birth_date DESC LIMIT 1;

-- Find the birthdate for the oldest employee.

SELECT birth_date FROM employee ORDER BY birth_date ASC LIMIT 1;

-- Find everyone that reports to Nancy Edwards (use the ReportsTo column).

SELECT * FROM employee WHERE reports_to = 1;

-- You will need to query the employee table to find the id for Nancy Edwards

-- Count how many people live in Lethbridge.

SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';
