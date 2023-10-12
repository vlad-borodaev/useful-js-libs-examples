CREATE DATABASE tenants_app; 

CREATE TABLE tenants (  
  id SERIAL PRIMARY KEY,   
  uuid VARCHAR(255) UNIQUE NOT NULL,  
  db_name VARCHAR(100) UNIQUE NOT NULL,  
  db_username VARCHAR(100),  
  db_password TEXT,   
  created_at TIMESTAMP DEFAULT NOW(),  
  updated_at TIMESTAMP DEFAULT NOW()
);