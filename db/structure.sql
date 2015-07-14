drop table if exists users;
create table users (
  id serial primary key,
  name varchar(255),
  email_address varchar(255),
  password_hash varchar(255),
  created_at timestamp,
  updated_at timestamp,
  gender varchar(255),
  age int,
  location varchar(255),
  seew boolean,
  seem boolean,
  picture_url varchar(255)
);

drop table if exists decision;
create table decision (
	  id serial primary key,
  	user_id int,
  	target_id int,
  	match boolean	
);