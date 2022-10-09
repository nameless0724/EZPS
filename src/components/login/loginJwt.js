const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

//set up global configuration access
dotenv.config();

let port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
});

//main code
//generating jwt
app.post("/login/generatetoken", (req, res) => {
    //validate user here and then generate jwt token
    let jwtSecretKey = process.env.jwt_secret_key;
    let data = {
        email: (""),
        password: (""),
    }

    const token = jwt.sign(data, jwtSecretKey);
});

//verification of jwt
app.get("/login/validatetoken", (req, res) => {
    //tokens are generally passed in header of request due to security reasons

    let tokenHeaderKey = process.env.token_header_key;
    let jwtSecretKey = process.env.jwt_secret_key;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            //access denied
            return res.status(401).send(error);
        }
    } catch (error) {
        //access denied
        return res.status(401).send(error);
    }
});