
DROP TABLE money; 
DROP TABLE products; 

CREATE TABLE products (
        id      SERIAL,                          /*with SERIAL ,"id" will be seted automatically */
        name    character varying(30)
    );

INSERT INTO products (name) VALUES ( 'iPhone'); /*now we dont have to write an id , but we have to say the comumn name */
INSERT INTO products (name) VALUES ( 'Samsung');
--vvvv---
 id |  name
----+---------
  1 | iPhone
  2 | Samsung

--------
CREATE TABLE money (
        amount      integer,
        currency    character varying(3),
        product_id  integer
    );
INSERT INTO money VALUES (2000, 'USD', 1);
INSERT INTO money VALUES (3000, 'USD', 2);
--vvvvvvvv--
 amount | currency | product_id
--------+----------+------------
   2000 | USD      |          1
   3000 | USD      |          2


