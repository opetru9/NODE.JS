CREATE TABLE products (
        id      integer PRIMARY KEY,
        name    character varying(30)
    );

INSERT INTO products VALUES (1, 'iPhone');
INSERT INTO products VALUES (2, 'Samsung');
--------
CREATE TABLE money (
        amount      integer,
        currency    character varying(3),
        product_id  integer
    );
INSERT INTO money VALUES (2000, 'USD', 1);
INSERT INTO money VALUES (3000, 'USD', 2);

----ALTER------
ALTER Table money               /*change money table structure*/
ADD CONSTRAINT money_product    /*give a name to the change*/
FOREIGN KEY (product_id)        /* "product_id" of money will have a reference in "id" of products */
REFERENCES products(id);
--vvv--
INSERT INTO money VALUES (3000, 'USD', 5); /*!!! now this will be an error because there is not a product with id = 5*/
                                           /* ! and now we can't delete an product before we delete this price on money table*/
                                           /* ! also we can't delete products table before we delete money table*/






   