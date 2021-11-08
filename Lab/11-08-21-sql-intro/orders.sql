-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.

CREATE TABLE orders(
  order_id SERIAL,
  person_id SERIAL,
  product_name VARCHAR(40) NOT NULL,
  product_price FLOAT,
  quantity INTEGER
  );

-- Add 5 orders to the orders table.
INSERT INTO orders (product_name, product_price, quantity)  
VALUES ('cheeseburger', 9.99, 1),
('hot wings', 12.99, 8),
('pizza', 7.99, 1),
('coke', 2.99, 1),
('sprite', 2.99, 1);

INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'pizza', 7.99, 1);

-- Select all the records from the orders table.

SELECT * FROM orders;

-- Calculate the total number of products ordered.

SELECT SUM(quantity) FROM orders;

-- Calculate the total order price.

SELECT SUM(product_price) FROM orders;

-- Calculate the total order price by a single person_id.

SELECT SUM(product_price) FROM orders WHERE person_id = 1;