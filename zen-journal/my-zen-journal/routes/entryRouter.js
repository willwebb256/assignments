const express = require("express")
const entryRouter = express.Router()
const Entry = require('../models/entry.js')


// Get All Entries
entryRouter.get("/", (req, res, next) => {
Entry.find((err, entries) => {
if(err){
res.status(500)
return next(err)
}
// entries.populate("comments").execPopulate()
return res.status(200).send(entries)
})
})


// Get entries by user id
entryRouter.get("/user", (req, res, next) => {
Entry.find({ user: req.auth._id }, (err, entries) => {
if(err){
res.status(500)
return next(err)
}
// entries.populate("comments")
return res.status(200).send(entries)
})
})


// Add new Entry
entryRouter.post("/", (req, res, next) => {
req.body.user = req.auth._id
const newEntry = new Entry(req.body)
newEntry.save((err, savedEntry) => {
if(err){
res.status(500)
return next(err)
}
return res.status(201).send(savedEntry)
})
})


// Delete Entry
entryRouter.delete("/:entryId", (req, res, next) => {
Entry.findOneAndDelete(
{ _id: req.params.entryId, user: req.auth._id },
(err, deletedEntry) => {
if(err){
res.status(500)
return next(err)
}
return res.status(200).send(`Successfully deleted entry: ${deletedEntry.title}`)
}
)
})


// Update Entry
entryRouter.put("/:entryId", (req, res, next) => {
Entry.findOneAndUpdate(
{ _id: req.params.entryId, user: req.auth._id },
req.body,
{ new: true },
(err, updatedEntry) => {
if(err){
res.status(500)
return next(err)
}
return res.status(201).send(updatedEntry)
}
)
})




// Upvote Issue
// issueRouter.post("/upvote/:issueId", (req, res, next) => {
// Issue.findOneAndUpdate(
// { _id: req.params.issueId },
// { $push: { upVotes: req.auth._id } },
// { new: true },
// (err, updatedIssue) => {
// if(err){
// res.status(500);
// return next(err);
// }
// return res.status(200).send(updatedIssue);
// }
// );
// });


// Downvote Issue
// issueRouter.post("/downvote/:issueId", (req, res, next) => {
// Issue.findOneAndUpdate(
// { _id: req.params.issueId },
// { $push: { downVotes: req.auth._id } },
// { new: true },
// (err, updatedIssue) => {
// if(err){
// res.status(500);
// return next(err);
// }
// return res.status(200).send(updatedIssue);
// }
// );
// });


module.exports = entryRouter;
