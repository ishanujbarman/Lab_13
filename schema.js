// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const appSchema = new Schema({
student_name:  String, 
reg_no: String,
marks: String
});

module.exports = mongoose.model("data-schema",appSchema,"student-db")
