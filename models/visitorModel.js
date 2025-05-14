const { required } = require('joi')
const mongoose = require('mongoose')

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    purpose: {
        type: String,
        required: true
    },
    whomToMeet: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    inTime: {
        type: Date,
        default: Date.now
    },
    outTime: {
        type: Date
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Visitor', visitorSchema)