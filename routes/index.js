const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

router.get('/', function(req, res){
res.render('form', {title: 'Registration form'});
})
router.post('/',[check('name').isLength({min:1}).withMessage('Please enter an email')], function(req, res){
    const error = validationResult(req);
    if(error.isEmpty()){
        res.send("Thank you for registration!")
    }else{
        res.render('form', {title: 'Registration form',
        error: error.array(),
        data:req.body,
    });
    }
    })

module.exports = router;