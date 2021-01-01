var express = require('express');
var router = express.Router();
var passport = require('passport');
var localStrat = require('passport-local').Strategy;

const Business = require('../model/business');
const Vehicle = require('../model/vehicle');
const User = require('../model/user');

router.get('/business', (req, res, next) => {
    Business.find(function (err, bus) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(bus);
        }
    });
});

router.post('/business', (req, res, next) => {
    console.log(req.body);
    const newBusiness = new Business({
        name: req.body.name,
        location: req.body.location,
        businessType: req.body.businessType
    });
    console.log(newBusiness);
    newBusiness.save((err, bus) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ message: 'business has been added to db' });
        }
    });
});

router.put('/business/:id', (req, res, next) => {
    Business.findOne({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            location: req.body.location,
            businessType: req.body.businessType
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }

        });


});

router.delete('/business/:id', (req, res, next) => {
    Business.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
            console.log(result);
        }
    });
});

router.get('/vehicle', (req, res, next) => {
    Vehicle.find(function (err, bus) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(bus);
        }
    });
});

router.post('/vehicle', (req, res, next) => {
    console.log(req.body);
    const newVehicle = new Vehicle({
        name: req.body.name,
        type: req.body.type,
        make: req.body.make,
        color: req.body.color,
        chassisNum: req.body.chassisNum,
        model: req.body.model,
        engineCC: req.body.engineCC,
        price: req.body.price,
        registered: req.body.registered,
        condition: req.body.condition,
        status: req.body.status,
        check: req.body.check
    });
    console.log(newVehicle);
    newVehicle.save((err, veh) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ message: 'vehicle has been added to db' });
        }
    });
});

router.put('/vehicle/:id', (req, res, next) => {
    Vehicle.findOne({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            make: req.body.make,
            color: req.body.color,
            chassisNum: req.body.chassisNum,
            model: req.body.model,
            engineCC: req.body.engineCC,
            price: req.body.price,
            registered: req.body.registered,
            condition: req.body.condition,
            status: req.body.status,
            check: req.body.check
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }

        });


});

router.delete('/vehicle/:id', (req, res, next) => {
    Vehicle.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
            console.log(result);
        }
    });
});





module.exports = router;