import express from "express";

const app = express();

app.use(express.json());

const db = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@john.com",
      password: "john",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "456",
      name: "Johnny",
      email: "johnny@john.com",
      password: "johnny",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  if (
    req.body.email === db.users[0].email &&
    req.body.password === db.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Sign In Failed");
  }
});

app.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  db.users.push({
    id: "789",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(db.users[db.users.length - 1]);
});

app.listen(8000, () => {
  console.log("App is Running Successfully on Port 8000!!🚀");
});

/*
/ -> res = this is working
/signin -> POST -> success/failed
/register -> POST -> user
/profile/:userid -> GET -> user
/image -> PUT -> For user image count 
*/
