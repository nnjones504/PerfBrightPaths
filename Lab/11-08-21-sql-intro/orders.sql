-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.

CREATE TABLE order(
  order_id SERIAL PRIMARY KEY,
  person_id SERIAL PRIMARY KEY,
  product_name VARCHAR(40) NOT NULL,
  product_price FLOAT,
  quantity INTEGER,
  );

-- Add 5 orders to the orders table.

-- Make orders for at least two different people.

-- person_id should be different for different people.

-- Select all the records from the orders table.

-- Calculate the total number of products ordered.

-- Calculate the total order price.

-- Calculate the total order price by a single person_id.
