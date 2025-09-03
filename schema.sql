SHOW TABLES;
create table user(
    id varchar(50) Primary Key,
    username varchar(50) unique,
    password  varchar (50) not null,
    email varchar(50) unique not null
);