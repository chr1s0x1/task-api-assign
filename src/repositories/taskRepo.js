import prisma from '../config/db.js';

export async function findAll(completed) {
  return prisma.task.findMany({
    where: completed === undefined ? undefined : { completed },
  });
}

export async function findAllCompleted() {
  return findAll(true);
}

export async function findAllUnCompleted() {
  return findAll(false);
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
