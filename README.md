# Supplier Management System

O Supplier Management System é uma aplicação web que permite gerenciar informações de fornecedores de uma empresa. Com este sistema, os usuários podem adicionar, visualizar, atualizar e excluir informações detalhadas sobre os fornecedores de sua empresa.

## Funcionalidades

- Adicionar um novo fornecedor, incluindo detalhes como nome, nome fantasia, CNPJ/CPF, regime tributário, data de cliente desde, entre outros.
- Visualizar a lista completa de fornecedores cadastrados.
- Editar as informações de um fornecedor existente.
- Excluir um fornecedor da lista.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: SpringBoot
- **Banco de Dados**: MySql
- **Estilo**: CSS com Bootstrap

## Instalação

1. Clone o repositório para sua máquina local:
2. Navegue até o diretório do projeto:
3. Instale as dependências do frontend e do backend:
    - Para instalar as dependências do frontend, navegue até o diretório `frontend` e execute:
        ```bash
        npm install
        ```
    - Para instalar as dependências do backend, navegue até o diretório `backend` e execute:
        ```bash
        ./mvnw install
        ```

4. Inicie o servidor backend:
    - No diretório `backend`, execute:
        ```bash
        ./mvnw spring-boot:run
        ```

5. Inicie o servidor frontend:
    - No diretório `frontend`, execute:
        ```bash
        npm run dev
        ```

6. Acesse a aplicação em seu navegador: [http://localhost:3000](http://localhost:3000)

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/supplier-management-system/issues) ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
