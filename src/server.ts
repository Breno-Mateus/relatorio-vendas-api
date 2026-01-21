import express from 'express';
import cors from 'cors';
import vendaRoutes from './routes/venda.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(vendaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});