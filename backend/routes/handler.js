const express = require('express');
const router = express.Router();

const fs = require('fs');
const { request } = require('http');
const path = require('path');


const filePath =  __dirname + '/data.json';

// Load data from filePath
let rawData = fs.readFileSync(filePath);
let events = JSON.parse(rawData);


router.get('/events', (req, res) => {
    res.end(JSON.stringify(events));
});


router.get('/events/:id', (req, res) => {
    var event = events.filter(obj => obj.id == req.params.id)
    res.end(JSON.stringify(event));
});


router.post('/add-event', (req, res) => {
    let event = {
        "id": req.body.id,
        "author": req.body.author,
        "capacity": req.body.capacity,
        "event": req.body.event,
        "venue": req.body.venue,
        "date": req.body.date,
        "description": req.body.description,
        "attendants": []
    }   
    events.push(event);
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2), function(err) {
        if (err) throw err;
        console.log('complete');
        }   
    );
    res.end();
});


router.post('/event-register/:id', (req, res) => {
    var event = events.filter(obj => obj.id == req.params.id);
    event[0].attendants.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2), function(err) {
        if (err) throw err;
        console.log('complete');
        }   
    );
    res.end()
});


module.exports = router;