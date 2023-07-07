const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)

//Give the book an id to find which author they belong to. That shows you in the code which is the one, and which is the many.