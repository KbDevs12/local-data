# @kang-bakso-development/local-data

**A simple npm package for easy JSON database management!**

## Description

This npm package allows you to create and manage a simple database using JSON files. You can easily store, read, update, and delete data. It is ideal for small to medium-sized projects that require a lightweight and easy-to-use database solution without installing a large database server.

## Features

- **Create JSON databases with custom filenames:** You are free to define the name of your database file.
- **Add new data:** Easily add new data and automatically assign unique IDs to each data entry.
- **Get all data:** Retrieve all data stored in the database with a single function call.
- **Get data by ID:** Quickly access specific data using its unique ID.
- **Update data by ID:** Easily update existing data by specifying its ID and the new data.
- **Delete data by ID:** Delete specific data entries using their unique IDs.

## Installation

`npm install @kang-bakso-development/local-data`

## Usage

```
const myDB = require("@kang-bakso-development/local-data");

// Create a new database file (if it doesn't exist) and add data
const newId = myDB.create("myData.json", { name: "John", age: 30 });

// Add data to the same file
myDB.add("myData.json", { name: "Jane", age: 25 });

// Get all data
const allData = myDB.getAll("myData.json");
console.log(allData);
```
