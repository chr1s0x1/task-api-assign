import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const tasks = await taskService.getTasks(req.query.completed);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function getCompletedTasks(req, res, next) {
  try {
    const completed = await taskService.getAllCompletedTasks();
    res.json(completed);
  } catch (error) {
    next(error);
  }
}

export async function getUnCompletedTasks(req, res, next) {
  try {
    const uncompleted = await taskService.getAllUnCompletedTasks();
    res.json(uncompleted);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}
