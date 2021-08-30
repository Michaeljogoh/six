CREATE DATABASE polo_database;

--\c into polo_database    

CREATE TABLE  polo ( 
   polo_id SERIAL  PRIMARY KEY,
   description VARCHAR(255)  
);

