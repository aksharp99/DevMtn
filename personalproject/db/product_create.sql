INSERT INTO products (user_id,quantity,price)
VALUES ($1,$2,$3)
RETURNING *;
