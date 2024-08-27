const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: { type: String, require: true },
    desc: { type: String, require: true },
    priority: { type: String, require: true },
    complete: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)