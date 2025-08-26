CREATE TABLE user(
    id INT PRIMARY KEY,
    username VARCHAR(30) UNIQUE ,
    email VARCHAR(50) UNIQUE  NOT NULL,
    password VARCHAR(30) NOT NULL 
);

i