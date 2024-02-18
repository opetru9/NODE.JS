--other comands
    \c e_shop         -connect
    \d                -all relationships
    \d+ prudcts       -only products table


---------------------------------------------------------------------------------------

--DDL comands / database
    DROP DATABASE e_shop;
    CREATE DATABASE e_shop;
    \c e_shop                /*connect to e_shop*/

--DDL comands / TABLE
    DROP TABLE products;
    CREATE TABLE products (
        --name   type                         option
        id      integer,
        name    character varying(30),
        price   integer
    );

----------------------------------------------------------------------------------------

--DML comands / DATA
-----------------CRUD--------------------------
    INSERT INTO products VALUES (1, 'iPhone', 1000);
    INSERT INTO products VALUES (2, 'Samsung', 900);
    INSERT INTO products VALUES (3, 'Mac', 1200);
    INSERT INTO products VALUES (4, 'Nokia', 700);

--Render data:
    SELECT id,name,price FROM products;
--or shortcut:
    SELECT * FROM products;
    SELECT * FROM products WHERE price > 1000;

--Update:
    UPDATE products SET price = 1050 WHERE id = 1;

--Delete:
    DELETE FROM products WHERE id = 4;