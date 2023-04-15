# Hi there! Welcome to Flights Service

## Project setup
    - clone the project on your local.
    - Execute `npm install` on the same path as of your root directory of the downloaded project.
    - Create a `.env` file in the root directory and add the following environment variables:
        - `PORT=3000`
    - Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json:

    ```
    {
  "development": {
    "username": <YOUR DB_LOGIN NAME>
    "password": <YOUR DB_LOGIN PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
    ```

    - Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create
    
    and then execute `npx sequelize db:migrate` to create the tables in your db.
    ```

## DB design

  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airplane but one airplane can have many flights.
  - A city has many airports but an airport belongs to only one city.
  - One airport can have many flights but a flight belongs to only one airport.

