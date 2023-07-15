const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3006;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rose73Toti02!",
  database: "influencerhub",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Conected to MySQL success!");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) throw err;
    res.send("User deleted successfully");
  });
});

app.post("/users", (req, res) => {
  const { name, email, subscribers, category, platform } = req.body;
  const sql =
    "INSERT INTO users (name, email, subscribers, category, platform) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, subscribers, category, platform],
    (err, result) => {
      if (err) throw err;
      res.send("User created successfully");
    }
  );
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email, subscribers, category, platform } = req.body;
  const sql =
    "UPDATE users SET name = ?, email = ?, subscribers = ?, category = ?, platform = ? WHERE id = ?";
  db.query(
    sql,
    [name, email, subscribers, category, platform, userId],
    (err, result) => {
      if (err) throw err;
      res.send("User updated successfully");
    }
  );
});

// ACCOUNT TABLE

app.get("/accounts", (req, res) => {
  const sql = "SELECT * FROM accounts";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch accounts" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/accounts/:email", (req, res) => {
  const email = req.params.email;
  const sql = "SELECT * FROM accounts WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch account" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/accounts", (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO accounts (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to create an account" });
    } else {
      res.status(200).json({ message: "Account created successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on  ${port}`);
});
 
module.exports = app;