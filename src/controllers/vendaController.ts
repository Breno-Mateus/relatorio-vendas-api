import { Request, Response } from 'express';
import { VendaModel } from '../models/vendaModel';

export class VendaController {
    
    static async getRelatorio(req: Request, res: Response) {
        try {
            const filtros = {
                produto: req.query.produto as string,
                categoria: req.query.categoria as string,
                dataInicio: req.query.dataInicio as string,
                dataFim: req.query.dataFim as string
            };

            console.log("Filtros recebidos:", filtros); 

            const vendas = await VendaModel.listarVendas(filtros);

            return res.status(200).json(vendas);

        } catch (error) {
            console.error('Erro no controller:', error);
            return res.status(500).json({ error: 'Erro interno ao buscar relatório.' });
        }
    }
}