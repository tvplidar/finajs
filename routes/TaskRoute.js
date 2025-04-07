// routes/TaskRoute.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/Tasks");

// GET all tasks
router.get("/", taskController.getAllTasks.bind(taskController));

// POST a new task
router.post("/", taskController.createTask.bind(taskController));

// PUT (update) a task by ID
router.put("/:id", taskController.updateTask.bind(taskController));

// DELETE a task by ID
router.delete("/:id", taskController.deleteTask.bind(taskController));

module.exports = router;
