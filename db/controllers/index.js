const Corgo = require('../models/models.js');

const createCorgo = (req, res) => {
    let { name, age, weight } = req.body;
    let newCorgo = new Corgo ({
        name,
        age,
        weight
    }).save()
    
    res.send('we added a dog :)');
}

module.exports = createCorgo;