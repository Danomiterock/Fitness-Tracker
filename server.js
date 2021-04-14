const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./controllers");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;