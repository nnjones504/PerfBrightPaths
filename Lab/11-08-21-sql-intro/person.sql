-- Create a table called person that records a person’s id, name, age, height (in cm , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)

CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  age INTEGER,
  height FLOAT,
  city VARCHAR(85),
  favorite_color VARCHAR(30)
)

-- Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment.

INSERT INTO person (name, age, height, city, favorite_color)
VALUES ('Steph Curry', 33, 187.96, 'San Francisco', 'blue'),
('Lebron James', 36, 205.74, 'Los Angeles', 'purple'),
('Kevin Durant', 33, 208.28, 'New York', 'Black'),
('Giannis Antetokounmpo', 26, 210.82, 'Milwuakee', 'Green'),
('Klay Thompson', 31, 198.12, 'San Francisco', 'blue');
-- Select all the people in the person table by height from tallest to shortest.

SELECT * FROM person ORDER BY height DESC;

-- Select all the people in the person table by height from shortest to tallest.

SELECT * FROM person ORDER BY height;

-- Select all the people in the person table by age from oldest to youngest.

SELECT * FROM person ORDER BY age DESC;

-- Select all the people in the person table older than age 20.

SELECT * FROM person WHERE age > 20;

-- Select all the people in the person table that are exactly 18.

SELECT * FROM person WHERE age = 18;

-- Select all the people in the person table that are less than 20 and older than 30.

SELECT * FROM person WHERE age < 20 AND age > 30;

-- Select all the people in the person table that are not 27 (use not equals).

SELECT * FROM person WHERE age <> 27;

-- Select all the people in the person table where their favorite color is not red.

SELECT * FROM person WHERE LOWER(favorite_color) <> 'red';

-- Select all the people in the person table where their favorite color is not red and is not blue.

SELECT * FROM person WHERE LOWER(favorite_color) <> 'red' AND LOWER(favorite_color) <> 'blue';


-- Select all the people in the person table where their favorite color is orange or green.

SELECT * FROM person WHERE LOWER(favorite_color) = 'orange' OR LOWER(favorite_color) = 'green';

-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).

SELECT * FROM person WHERE LOWER(favorite_color) IN( 'orange','green','blue');

-- Select all the people in the person table where their favorite color is yellow or purple (use IN).

SELECT * FROM person WHERE LOWER(favorite_color) IN( 'yellow', 'purple');