# Teste Frontend React Developer - tgid

Este projeto foi desenvolvido como parte do desafio proposto pela tgid para a vaga de Frontend React Developer. O objetivo principal foi criar uma aplicação React (com TypeScript) que simula uma loja online, consumindo uma API REST simulada com `JSON Server` e o arquivo `dbTeste.json`.

## 🚀 Funcionalidades Implementadas

* **Listagem de Produtos:** A aplicação lista os produtos disponíveis, buscando-os do arquivo `dbTeste.json` via `JSON Server`.
* **Exibição Individual de Produto:** Cada produto pode ser visualizado individualmente para uma inspeção mais detalhada.
* **Sistema de Carrinho de Compras:**
    * O usuário pode adicionar produtos ao carrinho.
    * É possível remover produtos do carrinho.
    * A quantidade de itens no carrinho é gerenciada.
* **Finalização de Compra:** Antes de finalizar a compra, o usuário pode revisar os produtos que serão comprados.
* **Resumo do Carrinho:** Um resumo claro do conteúdo do carrinho é apresentado ao usuário.
* **Paginação:** Implementei um sistema de paginação para a listagem de produtos, conforme sugerido nas observações do desafio, para melhorar a experiência do usuário com grandes volumes de dados.

## 📁 Estrutura do Projeto

A estrutura do projeto foi organizada visando a modularidade e a manutenibilidade, utilizando as seguintes pastas principais dentro de `src/`:

* `assets/`: Contém recursos estáticos como fontes, imagens e arquivos SASS (para estilização).
* `components/`: Reúne componentes React reutilizáveis da interface do usuário (ex: `CarButton.tsx`, `Cart.tsx`, `Modal.tsx`, `Pagination.tsx`, `ProductCard.tsx`, `ProductList.tsx`).
* `context/`: Gerencia o estado global da aplicação usando a Context API do React (`GlobalContext.tsx`), para facilitar o compartilhamento de dados entre componentes.
* `hooks/`: Contém hooks personalizados (`useCarrinho.tsx`, `usePaginacao.tsx`) para encapsular lógicas reutilizáveis e otimizar a organização do código.
* `service/`: Responsável pela lógica de integração com a API (`api.tsx`), separando as chamadas de dados da lógica dos componentes.
* `type/`: Define as interfaces TypeScript para os dados e propriedades dos componentes, garantindo tipagem forte e auxiliando no desenvolvimento.

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenibilidade do código.
* **Vite:** Ferramenta de build rápida para projetos frontend.
* **JSON Server:** Usado para simular uma API REST com o arquivo `dbTeste.json`, permitindo o desenvolvimento do frontend sem a necessidade de um backend real.
* **ESLint:** Ferramenta para identificar e reportar padrões problemáticos encontrados no código JavaScript/TypeScript.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina:

1.  **Instalar Dependências:**
    ```bash
    npm install
    ```
2.  **Iniciar o JSON Server:**
    Certifique-se de ter o `json-server` instalado globalmente ou adicione-o como uma dependência de desenvolvimento.
    ```bash
    json-server --watch dbTeste.json --port 3001
    ```
    *(**Nota:** Se você alterar a porta, lembre-se de ajustar a URL da API em `src/service/api.tsx`.)*
3.  **Iniciar a Aplicação React:**
    ```bash
    npm run dev
    ```

Espero que a implementação atenda aos requisitos do desafio e demonstre minhas capacidades em desenvolvimento Frontend com React e TypeScript.

Atenciosamente,

[Gabriel Fernandes / gabriel0917py@gmail.com]
