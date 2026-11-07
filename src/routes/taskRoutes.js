import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateCompletedQuery } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateCompletedQuery, taskController.getTasks);
router.get('/completed-tasks', taskController.getCompletedTasks);
router.get('/uncompleted-tasks', taskController.getUnCompletedTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
