const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("✅ SUCCESS: Connected to MongoDB!"))
  .catch(err => console.error("❌ FAILED:", err.message));
