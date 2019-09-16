const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8090;

app.use(bodyParser.json());
let sessions = [];
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password && username != "" && password != "") {
    if (username === "erdal" && password === "123456") {
      var session = Math.random()
        .toString(36)
        .substring(2, 15);

      sessions.push(session);

      res.json({
        result: true,
        sessionId: session,
        message: "Success",
        username
      });
    } else {
      res.json({
        result: false,
        message: "incorrect username or password"
      });
    }
  } else {
    res.json({
      result: false,
      message: "incorrect username or password"
    });
  }
});

app.post("/api/userinfo", (req, res) => {
  const sessionId = req.body.sessionId;
  const username = req.body.username;
  if (username && sessionId && username != "" && sessionId != "") {
    if (sessions.indexOf(sessionId) >= 0) {
      res.json({
        result: true,
        message: "Success",
        name: "erdal",
        usermame: "erdal"
      });
    } else {
      res.json({
        result: false,
        message: "incorrect username or session"
      });
    }
  } else {
    res.json({
      result: false,
      message: "incorrect username or serssion"
    });
  }
});

app.listen(port, () => {
  console.log("connected to port" + port);
});
