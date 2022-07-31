require('dotenv').config()
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// entregar uma porta
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apijpw.gikri.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!!')
    })
    .catch((err) => console.log(err))

module.exports = mongoose;