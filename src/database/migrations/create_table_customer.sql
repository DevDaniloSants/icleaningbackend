CREATE TABLE IF NOT EXISTS customer (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(16) NOT NULL,
    lat_x FLOAT8 NOT NULL,
    long_y FLOAT8 NOT NULL
);
