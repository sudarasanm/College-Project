const mongoose = require('mongoose');


const borrowSchema = new mongoose.Schema({
    register: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, "Enter the Book Name"],
        trim: true,
        maxLength: 100
    },
    bookid: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: {
            values: [
                'Student',
                'Faculty'
            ],
            message: "Select the correct Role"
        }
    },
    Date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: String,
        default: "Borrow"
    }
})

let schema = mongoose.model("Borrow", borrowSchema)

module.exports = schema