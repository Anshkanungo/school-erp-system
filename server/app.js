const express = require('express');
const app = express();
const cors = require("cors");
require('./config/dbConfig')

// Import Router
const studentRouter = require("./routes/studentRoutes");
const sampleRouter = require('./routes/sampleRoutes');
const newStudentRouter =  require("./routes/newStudentRoutes")
const noticeRouter = require("./routes/noticeRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/v1/student", studentRouter);
app.use("/v1/notice",noticeRouter);
app.use('/v1', sampleRouter);
app.use('/v1',newStudentRouter);


module.exports = app;
