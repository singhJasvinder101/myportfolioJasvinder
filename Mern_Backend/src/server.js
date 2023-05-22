const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const hbs = require('hbs')
const validator = require('validator')


require('./db/conn')
const { newuser } = require('./models/users')
require('dotenv').config();


app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../views"))
app.use(express.static(path.join(__dirname, "../public")))
hbs.registerPartials(path.join(__dirname, "../views/partials"))
app.use(express.urlencoded({ extended: false }))   // req.body in console
app.use(express.json()) // to recognize as json 

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/submit', async (req, res) => {
    try {
        const userRegistration = new newuser({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        console.log(req.body.name);
        console.log(req.body.email);

        const user = await userRegistration.save();
        console.log(user);

        res.render("index");
    } catch (e) {
        console.log(e.message);
        res.render("index", { error: e.message }); // Render the "index" view with the error message
    }
});


app.listen(port, (req, res) => {
    console.log("server running")
})