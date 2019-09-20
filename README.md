# Projeto da Disciplina de LFA

Por favor, códigos com 4 espaços de indentação e usar espaço, não tabulação.

## FrontEnd

### Estrutura de Projeto

#### /src

Pasta das pastas, (quase) tudo vai estar aqui.

#### /src/api

Onde se deve ficar as requisições de API, funções que fazem POST, GET e etc.

#### /src/assets

Onde os arquivos constantes do projeto devem se localizar. Ex: Imagens.

#### /src/components

Componentes re-utilizáveis do app, caso seja necessário usar um *Header*, *Footer*, *Layout Wrappers* em geral.

#### /src/screens

Telas do app.

#### /src/reducers

Toda a lógica *reduxiana* do projeto. Redux, é basicamente, um método mais simples de se encadear ações. Ex: Dar play no próximo vídeo automaticamente após o que se estava assistindo terminar.

#### /src/styles

Todos os estilos, o "CSS" do app. React-Native não usa o CSS literalmente, tem parte do JSX dedicada para estilização, porém a sintaxe é muito parecida com a do CSS.

#### /src/routes.js

Arquivo onde se localizará toda a lógica de roteamento do app, aqui será definido quais os métodos de troca de tela. Ex: Navegação com menu lateral, navegação entre abas, navegação com botões e etc.

#### Ferramentas Utilizadas

- **NodeJS**
- **Yarn**
- **Genymotion**

#### NodeJS

A "linguagem" utilizada, é na verdade um wrapper feito em C/C++ para executar JavaScript fora do navegador. **React-Native** nada mais é do que uma biblioteca do Node.

- [Download](https://nodejs.org/en/download/)

#### Yarn

Gerenciador de dependências, concorrente do npm.

- [Como instalar](https://yarnpkg.com/lang/pt-br/docs/install/)
- [Como usar](https://yarnpkg.com/pt-BR/docs/usage)

Usar o comando `yarn` dentro da pasta do projeto para baixar todas as dependências do projeto.

#### Genymotion

O gerenciador de smartphones virtuais para se poder testar o app, recomendado, porem pode se usar o que quiser.

- [Configurações de ambiente de desenvolvimento](https://docs.rocketseat.dev/ambiente-react-native/introducao)

### Ferramentas Opcionais

- [**VSCode**](https://code.visualstudio.com/download)

### Comandos para execução

`yarn start` inicia o servidor de desenvolvimento, expo, do projeto. O ambiente de desenvolvimento deve estar configurado corretamente para que se possa ter sucesso com a execução do aplicativo.
