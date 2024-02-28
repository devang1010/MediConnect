const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://devangt101003:devang1010@cluster0.uxewgrt.mongodb.net/MediConnect_db");

const connection = mongoose.connection;

app.listen(5000);