const express = require('express');
const UserModel = require('../models/user/Model');

const router = express.Router();

router.get('*', (req,res)=>{
    res.sendFile('index.html')
}).post('/',async (req,res) => {

    try {

        res.status(200).json({ok:'ok'});
    }
    catch (e) {
        console.error(e.message);
    }

})

module.exports = router;