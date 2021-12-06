# eStationery

## Introduction

eStationery is an online Stationery Shop website that shows products in grid view. 

## Technology Used
1.	Node.js
2.	MongoDB
3.	Mongoose
4.	Express.js
5.	Bootstrap
6.	FontAwesome
7.	HTML
8.	CSS
9.	Passport – for authentication

## Features:
1.	User signup/registration, login, and logout with validation checks
2.	List all the products
3.	Filter products based on categories
4.	Search products
5.	Pagination (Integrated with list, filter, and search features)
6.	Add products to the cart and checkout (user must be logged in to checkout)
7.	Update the quantity of items in the cart, remove all products
8.	Show history of orders for users
9.	Admin features – Add new product, Update product, Delete product (Soft delete)

## Assumptions:
To test the checkout process -
1.	User must be logged in.
2.	Use dummy card number 4242 4242 4242 4242 with any expiration date, CVC, and zip codes.

## Run

Run "npm install" in the terminal to install all the dependencies
Run "npm start" in the terminal and the application should work on http://localhost:3000/

## Database

All the models can be found in the models directory created using mongoose.
1. User Schema
2. Category Schema
3. Product Schema
4. Cart Schema
5. Order Schema