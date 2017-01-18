CREATE TABLE users
(
id SERIAL PRIMARY KEY,
name text,
email text
)

CREATE TABLE orders
(
id SERIAL PRIMARY KEY,
userid INTEGER references users(id),
completed BOOLEAN
);

CREATE TABLE products
(
id SERIAL PRIMARY KEY,
description VARCHAR(250),
name VARCHAR(250),
price FLOAT,
image text
)

CREATE TABLE products_in_order
(
id SERIAL PRIMARY KEY,
ordered INTEGER references orders(id),
productid INTEGER references products(id),
quantity FLOAT
)

INSERT INTO products(id, description)
