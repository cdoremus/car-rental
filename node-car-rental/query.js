const { Client } = require('pg');

const URL = 'postgresql://localhost:5432/mydb?currentSchema=car_rental';
const BEST_PRICE_QUERY = `
  SELECT
    inventory.inventory_id,
    car.make,
    loc.airport,
    price.price
  FROM
    car_rental.price,
    car_rental.location loc,
    car_rental.car,
    car_rental.inventory,
    car_rental.season
  WHERE
    car.car_id=price.car_id AND
    loc.location_id=price.location_id AND
    season.season_id=price.season_id AND
    season.location_id=loc.location_id AND
    inventory.car_id = price.car_id AND
    inventory.location_id=price.location_id AND
    loc.location_id=$1::integer AND
    $2::integer between season.start_month and season.end_month AND
    inventory.is_rented=false
    ORDER BY price
  `

const FETCH_LOCATIONS_QUERY = `
  SELECT
    loc.location_id,
    loc.airport,
    loc.city
  FROM
    car_rental.location loc
`

async function findBestPrice(locationId, month) {
  const client = new Client({connectionString: URL});
  await client.connect();
  const {rows} = await client.query(BEST_PRICE_QUERY,
                    [locationId, month]);
  // rows.forEach(row => console.log(`${row.make} ${row.airport} ${row.price}`));
  await client.end();
  return rows;
}

async function fetchLocations() {
  const client = new Client({connectionString: URL});
  await client.connect();
  const {rows} = await client.query(FETCH_LOCATIONS_QUERY);
  await client.end();
  return rows;
}

  module.exports = {
    findBestPrice,
    fetchLocations
  }
