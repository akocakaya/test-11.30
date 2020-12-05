import express from 'express';
const router = express.Router();
import { createTask, getTask, getTaskList } from '../controller/task.controller';

router.post('/', createTask);
router.get('/:id', getTask);
router.get('/getTaskList', getTaskList);

export default router;