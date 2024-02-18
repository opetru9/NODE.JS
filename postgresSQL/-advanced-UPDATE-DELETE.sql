-- +10% price for price < 3000:
UPDATE money SET amount = 1.1 WHERE amount < 1000;

--delete with id:
DELETE FROM money WHERE product_id = 2

--delete with name / DELETE JOIN: 
--remove the price for name :
DELETE FROM money
USING products
WHERE products.name = name