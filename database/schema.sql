CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    username VARCHAR(50) UNIQUE,
    password TEXT,
    role VARCHAR(50)
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    status VARCHAR(20)
);

CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    speed VARCHAR(50),
    price NUMERIC,
    duration INTEGER
);

CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    package_id INTEGER,
    start_date DATE,
    end_date DATE,
    status VARCHAR(20)
);
CREATE TABLE invoices (

    id SERIAL PRIMARY KEY,

    customer_id INTEGER,

    amount NUMERIC,

    invoice_date DATE,

    status VARCHAR(20)

);



CREATE TABLE payments (

    id SERIAL PRIMARY KEY,

    customer_id INTEGER,

    invoice_id INTEGER,

    amount NUMERIC,

    payment_date DATE,

    method VARCHAR(50)

);
