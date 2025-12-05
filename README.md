This is a base express project all the minimum require dependency are added can just check `package.json` file.
let's go inside `src` folder and see.

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

- `routes` -> In the routes folder, we register a route and the corresponding `middleware` and `controllers` to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In `controllers` we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in `controllers` and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> contains the buiness logic and interacts with `repositories` for data from the database

- `utils` -> contains helper methods, error classes etc.

go to `src` write `cd src` and write 

``` npx sequelize init ```
- By executing above cmd you will get model folder,seeders folder and config.json inside config folder 

```npx  sequelize model:generate --name Airplane --attributes modeNumber:string ```
- it will generate a model with name Airplane and give attributes to the model 

``` npx sequelize db:migrate ```
- it migrate all the files inside the migrations folder to the database table its like version control of database

``` npx sequelize migration:generate --name update-city-airport-association ```
- it is use update the existing model (schema of a table)
no model will create by using the above because it is use to update the model in db
above cmd will create a new migration file and by using above file you can update your db

### what ever change in migration folder(file) will give you a database level check
and 
### the model folder(file) will give you js level check