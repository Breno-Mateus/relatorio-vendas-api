import db from './config/database';

const vendasIniciais = [
    { produto: "Notebook Dell", categoria: "Eletrônicos", quantidade: 1, valor_total: 3500.00, data_venda: "2023-01-10T14:30:00" },
    { produto: "Mouse Logitech", categoria: "Periféricos", quantidade: 2, valor_total: 150.00, data_venda: "2023-01-12T10:00:00" },
    { produto: "Monitor Samsung", categoria: "Eletrônicos", quantidade: 1, valor_total: 1200.00, data_venda: "2023-02-05T16:20:00" },
    { produto: "Teclado Mecânico", categoria: "Periféricos", quantidade: 1, valor_total: 300.00, data_venda: "2023-02-15T09:00:00" },
    { produto: "Cadeira Gamer", categoria: "Móveis", quantidade: 1, valor_total: 1800.00, data_venda: "2023-03-01T11:45:00" },
    { produto: "Mesa de Escritório", categoria: "Móveis", quantidade: 1, valor_total: 600.00, data_venda: "2023-03-10T13:00:00" },
    { produto: "Fone Bluetooth", categoria: "Áudio", quantidade: 3, valor_total: 450.00, data_venda: "2023-04-20T15:30:00" },
    { produto: "Webcam HD", categoria: "Periféricos", quantidade: 1, valor_total: 250.00, data_venda: "2023-05-05T08:15:00" },
    { produto: "Suporte Monitor", categoria: "Acessórios", quantidade: 2, valor_total: 100.00, data_venda: "2023-05-12T17:50:00" },
    { produto: "Cabo HDMI", categoria: "Acessórios", quantidade: 5, valor_total: 125.00, data_venda: "2023-06-01T14:00:00" }
];

const seed = () => {
    console.log('Iniciando o seed...');

    db.serialize(() => {
        db.run("DELETE FROM vendas", (err) => {
            if (err) {
                console.error("Erro ao limpar tabela:", err.message);
                return;
            }
            console.log("Tabela limpa.");
        });

        const stmt = db.prepare("INSERT INTO vendas (produto, categoria, quantidade, valor_total, data_venda) VALUES (?, ?, ?, ?, ?)");

        vendasIniciais.forEach((venda) => {
            stmt.run([
                venda.produto,
                venda.categoria,
                venda.quantidade,
                venda.valor_total,
                venda.data_venda
            ]);
        });

        stmt.finalize((err) => {
            if (err) {
                console.error("Erro ao finalizar seed:", err.message);
            } else {
                console.log("Seed concluído! 10 vendas inseridas.");
            }
        });
    });
};

seed();