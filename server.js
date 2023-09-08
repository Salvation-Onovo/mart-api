const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const { response } = require('./utils/helpers');

require("dotenv").config()


const app = express();

// MIDDLEWARES
app.use(cors({ origin: "*" }))
app.use(morgan("dev"))

// ROUTES 
const allRoutes = require("./routes")
app.use("/api/v1", allRoutes)

// HOME ROUTE 
app.get('/', (req, res) => {
  res.status(200).send(response(`${process.env.APP_NAME} API running`))
})

// 404 ROUTE
app.use("*", (req, res) => {
  res.status(404).send(response("Invalid route", null, false))
})


// ERROR ROUTE
app.use((err, req, res, next) => {
  res.status(500).send(response(err?.message || "Internal Server Error", null, false))
})

// SERVER APP
const PORT = process.env.PORT || 5000

// CONNECT DB
const connectDB = require('./config/database');
connectDB(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
})