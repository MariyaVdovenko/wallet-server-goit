# Wallet server application

## Install

npm install npm install -g nodemon

## Run

npm start

## API

`GET /costs` - retrive full product list;

`GET /costs/?category=tech` - retrieve all product list with category "tech" as
example;

`GET /costs/:id` - retrieve product;

`POST /costs` - create product;

`PUT /costs/:id` - update product and change modified date;

`DELETE /costs/:id` - remove product;
