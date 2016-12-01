-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
-- DROP TABLE IF EXISTS users;
-- CREATE TABLE Users
-- (
--   id SERIAL PRIMARY KEY,
--   firstname VARCHAR(255),
--   lastname VARCHAR(255),
--   email VARCHAR(255)
-- )
( 'John', 'Smith', 'John@Smith.com'),
( 'Dave', 'Davis', 'Dave@Davis.com'),
( 'Jane', 'Janis', 'Jane@Janis.com');
