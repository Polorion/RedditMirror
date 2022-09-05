/* eslint-disable no-undef */
import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";
import { CLIENT_ID, CURRENT_URL, SECRET } from "../../config";

const app = express();

const PORT = process.env.PORT || 3000;

const innitData = {
  CURRENT_URL,
  CLIENT_ID,
  SECRET,
};

app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  axios

    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${CURRENT_URL}`,
      {
        auth: {
          username: CLIENT_ID,
          password: SECRET,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(
          ReactDOM.renderToString(App),
          JSON.stringify(innitData),
          data["access_token"]
        )
      );
    })
    .catch(console.log);
});
app.get("*", (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App), JSON.stringify(innitData))
  );
});
app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
