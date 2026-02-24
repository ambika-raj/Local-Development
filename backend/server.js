// import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db.js";
dotenv.config();

// import http from "http";
// const server = http.createServer((req, res) => {
//     res.write("HELOO");
//     res.end()
// });
// import mongoose from 

const PORT = process.env.PORT || 3000;

// server.listen(3000, () => {
//     console.log(`Server is running at`)
// });
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });

});