const Task = require('../models/Task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving tasks',
      error: error.message,
    });
  }
};

// Get single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving task',
      error: error.message,
    });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // Validation
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Task title is required',
      });
    }

    const task = await Task.create({
      title,
      description,
      status: status || 'Pending',
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating task',
      error: error.message,
    });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // Find and validate task exists
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    // Validate title if provided
    if (title && title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Task title cannot be empty',
      });
    }

    // Update fields
    if (title) task.title = title;
    if (description !== undefined) task.description = description;
    if (status && ['Pending', 'In Progress', 'Completed'].includes(status)) {
      task.status = status;
    }

    await task.save();

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating task',
      error: error.message,
    });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting task',
      error: error.message,
    });
  }
};
