CREATE DATABASE cardealership;

CREATE TABLE car(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE employee(
  employee_id SERIAL PRIMARY KEY,
  username VARCHAR(10),
  password VARCHAR(255)
);

