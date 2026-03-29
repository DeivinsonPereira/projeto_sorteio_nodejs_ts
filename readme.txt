# Projeto Sorteio Node.js + TypeScript

## Descrição
Este projeto realiza um sorteio para encontrar o "azarado mais sortudo" entre uma lista de pessoas, utilizando Node.js e TypeScript. O sorteio elimina participantes aleatoriamente até restar apenas um, exibindo o resultado de forma estilizada no terminal.

## Funcionalidades
- Carrega uma lista de pessoas a partir de um arquivo CSV.
- Sorteia e elimina participantes até restar apenas um.
- Exibe o resultado no terminal com destaque visual.
- Mascara o e-mail do sorteado para privacidade.

## Estrutura do Projeto
```
projeto_sorteio_nodejs_ts/
├── package.json
├── src/
│   ├── index.ts                # Ponto de entrada do app
│   ├── data/
│   │   └── dados.csv           # Lista de pessoas (nome;email)
│   ├── function/
│   │   ├── carregar_pessoas.ts # Função para ler o CSV
│   │   └── sortear_azarado.ts  # Função de sorteio
│   ├── model/
│   │   └── pessoa.ts           # Classe Pessoa
│   └── ui/
│       └── terminal.ts         # Interface de terminal
```

## Como Executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o sorteio:
   ```bash
   npm start
   ```

## Exemplo de Entrada (dados.csv)
```
Maria Silva;maria.silva@empresa.com.br
Pedro Junior;p.junior@example.com
... (outros participantes)
```

## Tecnologias Utilizadas
- Node.js
- TypeScript
- terminal-kit (para interface no terminal)

## Autor
Deivinson Pereira

## Licença
ISC
