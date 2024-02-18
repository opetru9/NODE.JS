--now we have TABLE products
 id |  name                                 
----+---------
  1 | iPhone
  2 | Samsung

--and we have TABLE money
 amount | currency | product_id
--------+----------+------------
   2000 | USD      |          1
   3000 | USD      |          2

--to see all this into one TABLE:
SELECT products.id,products.name,money.amount,money.currency FROM 
products JOIN money
ON money.product_id = products.id;

--vvv---

 id |  name   | amount | currency
----+---------+--------+----------
  1 | iPhone  |   2000 | USD
  2 | Samsung |   3000 | USD


--we can modify :
SELECT products.id, products.name, FLOOR( money.amount *1.2) AS "amount",'EUR' AS "currency" FROM 
products JOIN money
ON money.product_id = products.id;

---vvv---

 id |  name   | amount | currency
----+---------+--------+----------
  1 | iPhone  |   2400 | EUR
  2 | Samsung |   3600 | EUR