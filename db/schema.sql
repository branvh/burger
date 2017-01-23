create database burgers_db;
use burgers_db;

create table burgers(
	id integer(4) auto_increment not null,
    burger_name varchar(25),
    devoured boolean,
    date timestamp,
    primary key (id)
);