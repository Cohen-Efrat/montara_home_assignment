const mongoose = require('mongoose')
const validator = require('validator')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
}, {
    timestamps: true
})

// userSchema.methods.toJSON = function () {
//     const user = this
//     const userObject = user.toObject()
//
//
//     return userObject
// }

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee