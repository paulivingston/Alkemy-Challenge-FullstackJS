CREATE DATABASE database_records;

USE database_records;

-- USERS TABLE
CREATE TABLE users(
    id INT NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR (60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- RECORDS TABLE
CREATE TABLE records(
id INT NOT NULL,
title VARCHAR(150) NOT NULL,
url VARCHAR(255) NOT NULL,
description TEXT,
user_id INT,
created_at timestamp NOT NULL  DEFAULT current_timestamp,
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE records
	ADD PRIMARY KEY (id);

ALTER TABLE records
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE records;