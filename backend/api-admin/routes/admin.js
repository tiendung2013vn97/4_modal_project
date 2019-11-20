var express = require('express');
var router = express.Router();
let accountRepo=require('../repo/account-repo')

router.get('/get-users', function (req, res, next) {
    accountRepo.getAllUser().then(users=>{
        res.json(users)
    }).catch(err=>{
        res.status(500).json("No user")
    })
});

module.exports = router;