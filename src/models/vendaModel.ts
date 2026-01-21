import db from '../config/database';

export interface Venda {
    id: number;
    produto: string;
    categoria: string;
    quantidade: number;
    valor_total: number;
    data_venda: string;
}

export class VendaModel {
    static listarVendas(filtros: any): Promise<Venda[]> {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM vendas WHERE 1=1`;
            const params: any[] = [];

            if (filtros.produto) {
                sql += ` AND produto LIKE ?`;
                params.push(`%${filtros.produto}%`);
            }

            if (filtros.categoria) {
                sql += ` AND categoria = ?`;
                params.push(filtros.categoria);
            }

            if (filtros.dataInicio && filtros.dataFim) {
                sql += ` AND data_venda BETWEEN ? AND ?`;
                params.push(filtros.dataInicio);
                params.push(filtros.dataFim);
            }

            sql += ` ORDER BY data_venda DESC`;

            db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows as Venda[]);
                }
            });
        });
    }
}