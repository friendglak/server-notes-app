# API Project with Express.js and Supabase

This project is an API structured with Express.js and Supabase. It is designed to provide a robust and scalable backend for web applications.

## Description

This project uses Express.js, a fast, unopinionated, and flexible Node.js web application framework. It provides a robust set of features for web and mobile applications. The project also uses Supabase, an open-source Firebase alternative, to provide real-time updates and user management.

## Installation

To get this project up and running, you will need to:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Set up your Supabase account and replace the placeholders in the code with your Supabase URL and anonymous key
4. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   PORT=8080
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```

5. Create a table in your Supabase database with the following schema:

   ```bash
   id: integer, primary key, unique, auto generated
   title: text
   description: text
   state: text
   ```

6. Run the server using `npm run dev`

## Usage

Once the server is running, you can interact with the API using HTTP requests. The API endpoints will be available at `http://localhost:8080/api/`.
The corresponding endpoints for the mentioned operations are as follows:

1. POST - /notes
2. GET - /notes
3. GET - /notes/:id
4. DELETE - /notes/:id
5. PATCH or PUT - /notes/:id
