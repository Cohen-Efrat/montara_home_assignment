const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    entry:{
        type: Date
    },
    exit:{
        type: Date
    }
})
const User = mongoose.model('Log', logSchema)

module.exports = User