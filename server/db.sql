CREATE DATABASE cardealership;

CREATE TABLE car(
  car_id SERIAL PRIMARY KEY,
  make VARCHAR(255),
  model VARCHAR(255),
  year INT,
  km INT,
  price INT,
  image_url VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE employee(
  employee_id SERIAL PRIMARY KEY,
  username VARCHAR(10),
  password VARCHAR(255)
);

