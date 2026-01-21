import { Router } from 'express';
import { VendaController } from '../controllers/vendaController';

const router = Router();

router.get('/relatorio', VendaController.getRelatorio);

export default router;