# InfluencerHub

### InfluencerHub is a full-stack web application built using Angular in the frontend and Node.js with MySQL in the backend. 
It provides CRUD (Create, Read, Update, Delete) operations for managing influencers' information.

## Backend Setup

1. Navigate to the backend folder and run the following command to install dependencies:
```npm install```

2. Open MySQL Workbench and connect to your local instance. Run the following commands to set up the necessary 
schemas and tables:
``` 
-- Create a schema to store tables
CREATE SCHEMA influencerhub;

-- Use the schema
USE influencerhub;

-- Create the 'users' table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subscribers INT NOT NULL,
  category VARCHAR(255) CHECK (category IN (
    'Review', 'Vlog', 'Gaming', 'Tutorial', 'Comedy', 'Beauty', 'Fashion',
    'Food', 'Travel', 'Technology', 'Music', 'Sports', 'Fitness', 'Education', 'Lifestyle'
  )),
  platform VARCHAR(255) CHECK (platform IN (
    'Youtube', 'Facebook', 'Instagram', 'Tiktok', 'Twitter', 'Twitch'
  ))
);

-- Insert values into the 'users' table
INSERT INTO users (name, email, subscribers, category, platform) VALUES
  ('John Doe', 'john@example.com', 10000, 'Review', 'Youtube'),
  ('Jane Smith', 'jane@example.com', 5000, 'Vlog', 'Instagram'),
  ('Michael Johnson', 'michael@example.com', 2000, 'Gaming', 'Twitch'),
  ('Sarah Williams', 'sarah@example.com', 1500, 'Food', 'Facebook'),
  ('David Lee', 'david@example.com', 800, 'Music', 'Twitter');

-- Create the 'accounts' table
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT 'User' CHECK (role IN ('Admin', 'User'))
);

-- Insert values into the 'accounts' table
INSERT INTO accounts (email, password, role)
VALUES ('user1@example.com', 'user123', 'User');

INSERT INTO accounts (email, password, role)
VALUES ('user2@example.com', 'user321', 'User');

INSERT INTO accounts (email, password)
VALUES ('user3@example.com', 'user231');
```
3. Open the server.js file in the backend folder and update the MySQL connection (__details according to your local setup.__)

4. Start the backend server by running the following command:
   ```npm start ```
   The server will run on port (__3006__).

## Frontend Setup

1. Open a new terminal window and navigate to the frontend/dashboard directory.

2. Run the following command to install the frontend dependencies:
   ```npm start ```
   
3. Once the dependencies are installed, start the frontend application by running:
    ```ng serve ```
   The application will be available at  (__http://localhost:4200__)

## Usage

1. Upon opening the application (__http://localhost:4200__), you will be presented with the landing page. Here, you can create a new account or use one of the existing accounts created during the backend setup.

2. The application offers two significant features:

* (__Create a new user__): You can create a new user by selecting the desired attributes and clicking the (__"Save"__) button in the modal.

* (__Filter by attribute__): Use the two select fields to filter users based on specific attributes. After selecting the desired attributes, click the "Search" button to retrieve the filtered results.

3. (__The table dynamically adjusts its columns based on the selected attributes__). Each row in the table provides options to view (without editing), edit (modify values of a user), and delete (remove a user). Clicking the view or edit option opens a modal with detailed information about the selected user.

4. Optionally, you can use the switch button to toggle between dark and light themes for the application.

Feel free to explore and manage influencer information using InfluencerHub!

