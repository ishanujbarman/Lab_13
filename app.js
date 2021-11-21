const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://ishanuj:saltlake@cluster0.vkp47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(()=> {console.log("Connected to DB")})
app.use(express.json())
app.post("/add-new-post", async (req, res) => {

    const myName = req.body.name;
    const myRegno = req.body.regno;
    const myMarks = req.body.marks;

    try{
        const newStudent = new mySchema(
            {
                name : myName,
                regno : myRegno,
                marks : myMarks
            }
        )
        const savedStudent = await newStudent.save();
        res.json(
            {"message" : "Student is saved", "data" :savedStudent}
        )
    }
    catch (err){
        res.json(err);
    }
})
app.use("/", (req, res) => {
    //res.send("Hello")
    res.json(
        {"messege" : "Express started"}
    )
})

app.listen(3001, () => console.log("Express server started"))