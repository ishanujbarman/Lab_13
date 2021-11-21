const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    name:  String,
    regno: Number,
    marks: Number
});

module.exports = mongoose.model("myStudent", studentSchema, "SL-Lab-13")