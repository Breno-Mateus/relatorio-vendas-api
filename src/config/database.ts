import sqlite3 from 'sqlite3';

const sql = sqlite3.verbose();

const db = new sql.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

const setupDatabase = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS vendas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                produto TEXT NOT NULL,
                categoria TEXT NOT NULL,
                quantidade INTEGER NOT NULL,
                valor_total REAL NOT NULL,
                data_venda TEXT NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error('Erro ao criar tabela:', err.message);
            } else {
                console.log('Tabela de vendas verificada/criada com sucesso.');
            }
        });
    });
};

setupDatabase();

export default db;