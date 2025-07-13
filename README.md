# 💼 BeTalent Employees

Este projeto é um teste prático feito para posição de Front-End na BeTalent. Trata-se da visualização de uma tabela com dados que são retornados de uma API simulada utilizando json-server.

## 🛠️ Stack

Este projeto foi construído com:

- [React](https://react.dev/) - Biblioteca para construção de interfaces
- [React Router (declarative)](https://reactrouter.com/start/modes#declarative) - Biblioteca para roteamento
- [Vitest](https://vitest.dev/) - Framework para implementação de testes
- [Testing Library](https://testing-library.com/) - Utilitário de testes
- [ESLint](https://eslint.org/) - Ferramenta de lint para garantir qualidade do código
- [pnpm](https://pnpm.io/pt/) - Gerenciador de pacotes

## 🏃 Como rodar o projeto?

Primeiro acesse o diretório do projeto e instale as dependências

```sh
pnpm install

# ou

npm install
```

Para rodar o servidor mockado

```sh
npx json-server@0.17 --watch db.json
```

> Importante utilizar esta versão do `json-server` para funcionamento de filtro com sufixo `_like`

Para compilar e ativar hot-reload para desenvolvimento

```sh
pnpm dev

# ou

npm run dev
```

Para rodar lint no código

```sh
pnpm lint

# ou

npm run lint
```

Para fazer Type-Check, compiar e minificar para build de produção

```sh
pnpm build

# ou

npm run build
```

Para rodar Storybook para visualizar componentes

```sh
pnpm storybook

# ou

npm run storybook
```

Para rodar testes unitários

```sh
pnpm test:unit

# ou

npm run test:unit
```

Para verificar o coverage

```sh
pnpm test:coverage

# ou

npm run test:coverage
```

E em um novo terminal, abra o index.html para visualizar página de coverage

```sh
open coverage/index.html
```

## 🚀 Features extras

- 🧪 Testes unitários: Implementação de testes com mais de 90% de coverage
- ⭐ Storybook: Os componentes do Design System estão com stories do Storybook para documentação.
- 🔎 Busca com debounce: O componente `Search` possui implementação de debounce para evitar chamadas de `onChange` em cada tecla pressionada
