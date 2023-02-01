const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

let FoodItem = sequelize.define('foodItem', {
    name: Sequelize.STRING,
    category: {
        type: Sequelize.STRING,
        validate: {
            len: [3, 10]
        },
        allowNull: false
    },
    calories: Sequelize.INTEGER
}, {
    timestamps: false
})


const app = express()
// TODO

app.get('/create', async (req, res) => {
    try {
        await sequelize.sync({ force: true })
        for (let i = 0; i < 10; i++) {
            let foodItem = new FoodItem({
                name: 'name ' + i,
                category: ['MEAT', 'DAIRY', 'VEGETABLE'][Math.floor(Math.random() * 3)],
                calories: 30 + i
            })
            await foodItem.save()
        }
        res.status(201).json({ message: 'created' })
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.get('/food-items', async (req, res) => { //req.query.id === 1
    try {
        let foodItems = await FoodItem.findAll()
        res.status(200).json(foodItems)
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.get('/food-items-ex', async (req, res) => {
    // TOPIC: REST

    // it should get all food-items in listing
    // throw server error if it doesn't have shelfNo and shelfNo as parameters
    // it should return an appropiate response if shelfSize is too big
    // code 200 shoudl be used in case of success
    try {

        let shelfNo, shelfNo;

        if (req.query.shelfNo || req.query.shelftSize) {

            if(shelftSize > 10) {
                res.status(400).json({ message: "shelf size too big" }); //bad request
            }
            else {
                shelfNo = req.query.shelfNo;
                shelftSize = req.query.shelftSize;
                let off = shelfNo * shelftSize;
                FoodItem.findAll({ offset: off, limit: shelftSize }).then(data => res.status(200).send(data));
            }
            
        }
        else {
            // FoodItem.findAll().then(data => res.status(200).send(data));
            res.status(500).json({ message: "missing params" });
        }

    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
})

module.exports = app