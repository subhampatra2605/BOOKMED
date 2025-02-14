const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require("./config");
const User = require("./Users");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    const { Fname , Lname, email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        let newUser = new User({ Fname , Lname, email, password }); 
        newUser = await newUser.save();
        const result = newUser.toObject();
        // delete result.password;
        res.status(201).json({ success: true, user: result });
    } catch (error) {
        console.error("Error while registering user:", error);
        res.status(500).json({ success: false, message: 'An error occurred while registering the user' });
    }
});

app.post("/login", async (req, res) => {
    if(req.body.password && req.body.email) {
                let user = await User.findOne(req.body).select("-password");
                if(user) {
                    res.send(user);
                } else {
                    res.send({ result: "No user found" })
                }
            } else {
                res.send({ result: "Invalid request" })
            }
});

app.post("/updateUser", async (req, res) => {
    const { email, Fname, Lname, currentPassword } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (user.password !== currentPassword) {
        return res.status(400).json({ message: "password is incorrect" });
      }
        user.Fname = Fname;
      user.Lname = Lname;
      await user.save();
  
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Failed to update user" });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`>>>>>>>>>>>>>>>>>>>>>Server running on port ${PORT}`));
