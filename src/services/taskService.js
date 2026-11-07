import * as taskRepository from '../repositories/taskRepo.js';

export async function getTasks(completed) {
  if (completed === undefined) {
    return taskRepository.findAll();
  }

  return taskRepository.findAll(completed === 'true');
}

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getAllCompletedTasks() {
  return taskRepository.findAllCompleted();
}

export async function getAllUnCompletedTasks() {
  return taskRepository.findAllUnCompleted();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
