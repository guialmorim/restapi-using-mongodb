const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Conectando DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, 
    useUnifiedTopology: true });

require('./src/models/Product')

app.use('/api', require('./src/routes/routes'));

app.listen(3000);
