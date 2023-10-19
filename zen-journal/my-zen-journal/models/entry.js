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
// imgUrl: {
// type: String,
// required: true
// },
// upVotes: [{
// type: Schema.Types.ObjectId,
// ref: "User"
// }],
// downVotes: [{
// type: Schema.Types.ObjectId,
// ref: "User"
// }],
// user: {
// type: Schema.Types.ObjectId,
// ref: "User"
// },
// comments: [{
// type: Schema.Types.ObjectId,
// ref: "Comment"
// }]
})


module.exports = mongoose.model("Entry", entrySchema)
