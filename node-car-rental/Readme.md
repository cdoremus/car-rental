# Car Rental Demo App Back End

This code is for a [Node](https://nodejs.org/en/)/[Express](https://expressjs.com/) application using a [PostgreSQL](https://www.postgresql.org/) database to provide data services for a Car Rental Demo front end application.

## Application Setup
### Node/Express
The application was created using Node.js 8.5.0

To install code dependencies:
```
npm install
```

### PostgreSQL
The application database used PostgreSQL 9.5.9.

A dump (backup) file for the mydb database used in this application was created the following command in the root `database` folder:
```
pg_dump -U postgres mydb > psql-database.dmp
```
To restore the database dump file do the following command in the root `database` folder:
```
psql -U postgres mydb < psql-database.dmp
# You will be then prompted for the postgres user password.
```
## Database Structure
The following DDL illustrates the database structure created in the `car_rental` schema (foreign keys are not shown):
```
CREATE TABLE car_rental.car
(
  car_id integer NOT NULL,
  make character(25) NOT NULL,
  CONSTRAINT pk_car PRIMARY KEY (car_id)
)

CREATE TABLE car_rental.location
(
  location_id integer NOT NULL,
  airport character(30) NOT NULL,
  city character(30) NOT NULL,
  CONSTRAINT pk_location PRIMARY KEY (location_id)
)

CREATE TABLE car_rental.inventory
(
  location_id integer NOT NULL,
  car_id integer NOT NULL,
  inventory_id integer NOT NULL,
  is_rented boolean NOT NULL DEFAULT false,
  CONSTRAINT pk_inventory PRIMARY KEY (inventory_id)
)

CREATE TABLE car_rental.season
(
  season_id integer NOT NULL,
  location_id integer NOT NULL,
  season_name character(25) NOT NULL,
  start_month integer NOT NULL,
  start_day integer NOT NULL,
  end_month integer NOT NULL,
  end_day integer NOT NULL,
  CONSTRAINT pk_season PRIMARY KEY (season_id, location_id)
)

CREATE TABLE car_rental.price
(
  car_id integer NOT NULL,
  location_id integer NOT NULL,
  season_id integer NOT NULL,
  price double precision NOT NULL,
  CONSTRAINT pk_price PRIMARY KEY (car_id, location_id, season_id)
)

```