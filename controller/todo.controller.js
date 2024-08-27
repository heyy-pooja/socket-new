const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")
const { io } = require("../socket/socket")

exports.createTodos = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    io.emit("todo-create-response", result)
    res.json({ message: "add Todo Success" })
})
exports.readTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "get all Todo Success", result })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.body, req.params.id)
    res.json({ message: "update Todo Success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    const result = await Todo.find()
    io.emit("todo-create-response", result)
    res.json({ message: "delete Todo Success" })
})