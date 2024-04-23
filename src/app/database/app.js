import Image from "next/image";
import styles from "./page.module.css";

  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const itemRoutes = require('../routes/item'); // Ensure you have this file in the right folder
  const app = express();
  const port = process.env.PORT || 8085;
  
  // Middleware
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json()); // for parsing application/json
  
  // MongoDB connection string
  const dbUsername = 'alleronabe122';
  const dbPassword = 'Q2d9HiWPeiZT7gDF';
  const dbName = 'Cluster0';
  
  const conn_str = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.oahbucp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  
  mongoose.connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log('MongoDB Connection Succeeded...');
      // Server starts listening after the database connection is established
      app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('Error in DB Connection', err));
  
  // Use the item routes with '/items' as the base path
  app.use('/items', itemRoutes);
  
  // A simple test route at the root to check if the server is running
  app.get('/', (req, res) => res.send('Hello World!'));
