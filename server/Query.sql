CREATE DATABASE authentication;

USE authentication;

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(30),
    email VARCHAR(40),
    password VARCHAR(150)
);