create schema namegator;

create table namegator.item (
	id serial,
	type text not null,
	description text not null
);

insert into namegator.item (type, description) values ('prefix', 'Air');
insert into namegator.item (type, description) values ('prefix', 'Jet');
insert into namegator.item (type, description) values ('prefix', 'Flight');
insert into namegator.item (type, description) values ('suffix', 'Hub');
insert into namegator.item (type, description) values ('suffix', 'Station');
insert into namegator.item (type, description) values ('suffix', 'Mart');
