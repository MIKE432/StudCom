CREATE TABLE userd (
    id SERIAL PRIMARY KEY NOT NULL,
    email TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL,
    salt TEXT NOT NULL
)