"use strict";

const http = require("node:http");
const express = require("express");

const serverPort = process.env.SERVER_PORT || 8080;

const app = express();
const server = http.createServer(app);

app.get("/", async (req, res) => res.json({ message: "Welcome to New World" }));

server.listen(serverPort);

server.on("listening", () => console.log(`Server running on *:${serverPort}`));
