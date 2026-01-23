# 📊 Relatório de Vendas — Backend

Backend da aplicação de **Relatório de Vendas**, desenvolvido como parte de uma **etapa de teste técnico**. Esta API é responsável por fornecer os dados de vendas consumidos pelo frontend.

---

## Sobre o projeto

Este backend disponibiliza uma **API REST simples** para consulta de vendas armazenadas em um banco de dados **SQLite**. O foco do projeto é demonstrar organização, clareza e boas práticas no desenvolvimento backend.

---

## Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* SQLite

---

## Como executar o projeto

### Pré-requisitos

* Node.js (versão 18 ou superior)
* npm ou yarn

### Passos

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências
npm install

# Execute a aplicação
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## Integração com o Frontend

> ⚠️ **Importante:** Para que o frontend da aplicação exiba corretamente as informações de vendas, este backend **deve estar em execução localmente**.

O frontend consome os dados fornecidos por esta API através de requisições HTTP.

---

## Estrutura dos dados

O endpoint de listagem de vendas retorna os dados no seguinte formato:

```sql
id INTEGER PRIMARY KEY AUTOINCREMENT,
produto TEXT NOT NULL,
categoria TEXT NOT NULL,
quantidade INTEGER NOT NULL,
valor_total REAL NOT NULL,
data_venda TEXT NOT NULL
```

### Exemplo de resposta (JSON)

```json
{
  "id": 1,
  "produto": "Notebook",
  "categoria": "Eletrônicos",
  "quantidade": 2,
  "valor_total": 7500.00,
  "data_venda": "2024-01-10"
}
```

---

## Observações

* Projeto desenvolvido exclusivamente para fins de avaliação técnica
* Os dados armazenados são fictícios
* Banco de dados local utilizando SQLite

---

## Autor

**Breno Mateus**
