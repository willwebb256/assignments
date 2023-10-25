const mongoose = require('mongoose')
const Schema = mongoose.Schema


const entrySchema = new Schema({
title: {
type: String,
required: true
},
description: {
type: String
},
user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
}

})


module.exports = mongoose.model("Entry", entrySchema)