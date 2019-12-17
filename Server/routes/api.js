const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb://127.0.0.1:27017/eventsdb";
const User = require("../models/user");
const Application = require("../models/application");
const jwt = require("jsonwebtoken");
const jso= require("../models/application");
const secret = "RTGEGDFGQW#%RBCV";

mongoose.connect(db, err => {
  if (err) {
    console.log("Connection failed!!");
  } else {
    console.log("Connected to MongoDb");
  }
});

router.get("/", (req, res) => {
  res.send("From API Route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});


router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!user) {
        res.status(401).send("Invalid user!!");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid password!!");
      } else {
        let accountId = { accountId:user.accountId }
        let payload = { userid: user._id };
        let token = jwt.sign(payload, secret);
        res.status(200).send({ token,user });
      }
    }
  });
});

router.post("/applications", isAuthorized, verifyToken, (req, res) => {
  let userData = req.body;
    data=[];
  Application.find( (err, application) => {
      if (err) {
      res.status(500).send(err); 
    } 
      else {

        for(i=0;i<application.length;i++){
          if(application[i].accountId==userData.accountId){
            data.push(application[i]) 
        }       
      }

        if(data.length == 0){
             res.status(500).send("Invalid Request")
      }else{
           console.log(data)
          res.status(200).send(data)
        }

      }
  });
});
 

// router.post("/test", isAuthorized, (req, res) => {
//   let userData = req.body;
//   data=[];
// User.find( {accountId:req.body.accountId}, (err, user) => {
//       if (err) {
//       res.status(500).send(err); 
//     } 
//     else{
//       console.log(user) 
//        Application.find({accountId:req.body.accountId}, (err, application) => {
//       if (err) {
//       res.status(500).send(err); 
//     } else if(application.length == 0){
//       res.status(401).send("Unauthorized Request"); 
//     }else{
//       res.send(application)
//     }
//        });
//         }       
//       });
//     });


function isAuthorized(req, res, next) {

 if(!req.body.email){
   return res.status(401).send("unauthorized request");
 }
 else if(!req.body.accountId){
   return res.status(401).send("unauthorized request");
 }
 
 User.find({email:req.body.email}, (err, user) => {
  //  console.log(user[0].accountId)
      if (err) {
      res.status(401).send(err); 
    } else if(user[0].accountId !== req.body.accountId){
      res.status(401).send("Unauthorized Request"); 
    }else{
      return next();
    }
       });
}




//middleware method to verify the token
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized request");
  }

  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("unauthorized request");
  }

  jwt.verify(token, secret, (err, result) => {
    if (err) {
      return res.status(401).send(err);
    }
  return next();
});
}

module.exports = router;
