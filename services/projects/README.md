# Project-Microservice

I apologize in advance for not providing a remote cloud server for databases. You can check everything if you deploy the databases locally. 

Before you run the application with a command `yarn dev`, you need to create a database **dev_db**. 

You can use `SQL Shell` to create a database (you need to install PostgreSQL in advance).

When you open a console press enter until you get to the password:

Password for user postgres: **W0rkW1thSQL**

Data is in file `.env`

After that you need to create a database **dev_db**.

 `create database dev_db;`
 
 `\c dev_db;`

And then run script `yarn dev`.

If you run `yarn start`, you need to create a database **prod_db**. 

The same procedures as with  `yarn dev`.