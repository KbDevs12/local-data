const fs = require("fs");
const path = require("path");

// Fungsi untuk mendapatkan path lengkap file database
const getDBPath = (filename) => {
  return path.join(__dirname, filename);
};
const readDB = (filename) => {
  const dbPath = getDBPath(filename);
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error saat membaca database:", error);
    throw error;
  }
};

// Fungsi untuk menulis data ke database
const writeDB = (filename, data) => {
  const dbPath = getDBPath(filename);
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(dbPath, jsonString, "utf-8");
  } catch (error) {
    console.error("Error saat menulis ke database:", error);
    throw error;
  }
};

// Fungsi untuk mendapatkan semua data
const getAll = (filename) => {
  const db = readDB(filename);
  return db;
};

// Fungsi untuk mendapatkan data berdasarkan ID
const getById = (filename, id) => {
  const db = readDB(filename);
  return db[id];
};

// Fungsi untuk membuat data baru
const create = (filename, data) => {
  const db = readDB(filename);
  const newId = Date.now().toString();
  db[newId] = data;
  writeDB(filename, db);
  return newId;
};

// Fungsi untuk menambahkan data baru
const add = (filename, data) => {
  const db = readDB(filename);
  const newId = Date.now().toString();
  db[newId] = data;
  writeDB(filename, db);
  return newId;
};

// Fungsi untuk memperbarui data berdasarkan ID
const update = (filename, id, data) => {
  const db = readDB(filename);
  if (db[id]) {
    db[id] = data;
    writeDB(filename, db);
    return true;
  }
  return false;
};

// Fungsi untuk menghapus data berdasarkan ID
const deleteById = (filename, id) => {
  const db = readDB(filename);
  if (db[id]) {
    delete db[id];
    writeDB(filename, db);
    return true;
  }
  return false;
};

module.exports = {
  getAll,
  getById,
  create,
  add,
  update,
  deleteById,
};
