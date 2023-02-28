import express from 'express';
import { createDino, getDinos, getDino, deleteDino, updateDino } from '../controllers/dinos.js';

const router = express.Router();

let dinos = [];

router.get('/', getDinos);

router.post('/', createDino);

router.get('/:id', getDino);

router.delete('/:id', deleteDino);

router.patch('/:id', updateDino);

export default router;