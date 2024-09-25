const express = require('express'); // Import express
const { NestFactory } = require('@nestjs/core');
const AppModule = require('./app.module');
const mongoose = require('mongoose');

async function bootstrap() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nest_node_api_test');

  const app = await NestFactory.create(AppModule);

  // Use express.json() middleware for JSON body parsing
  app.use(express.json());

  // Use the routes from AppModule
  app.use('/', app.get(AppModule).getRoutes());

  app.listen(3000, () => {
    console.log('Application is running on: http://localhost:3000');
  });
}

bootstrap();
