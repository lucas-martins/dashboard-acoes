# 📖 Dashboard de Ações - Documentação
Aplicação para exibir um dashboard com informações sobre uma ação de uma corretora de ações.

# 🔖 Sobre

Esta aplicação foi desenvolvida em React. O back-end utilizado nesta aplicação está disponível também aqui no Github. [Back-end](https://github.com/Alive-App/hiring-frontend/tree/main/server)

# 💻 Setup para o ambiente de desenvolvimento

Siga os passos para execução do projeto e dos testes em sua máquina.

## 1. Instalando o Git e Node.JS ( **v16.18.1** )

Caso não possua o Git instalado, sua instalação é necessária para que seja possível realizar o clone do projeto no GitHub. O [Git](https://git-scm.com/) pode ser baixado em seu site oficial.

Caso não possua também o Node.JS, é necessário a instalação do mesmo para execução deste projeto. Este projeto foi desenvolvido utilizando o a versão 16.18.1 do Node. O [Node](https://nodejs.org/en/) pode ser baixado em seu site oficial.

## 2. Clonando repositório

Para executar a aplicação é necessário primeiramente que você faça o clone do repositório no GitHub. Para realizar o clone execute o comando abaixo:
>git clone https://github.com/lucas-martins/dashboard-acoes

## 3. Instalação das dependências

Para execução da aplicação é necessário que todos os pacotes necessários estejam instalados. Para fazer a instalação basta executar o comando abaixo na raiz do projeto:
>npm install

## 4. Preencher a variável de ambiente **BASE_URL**:

Este passo é bem importante para que a aplicação consiga fazer as requisições ao Back-end. Existe um arquivo ".env.example" na raiz do projeto. Este arquivo deve ser renomeado para ".env". Ele possui a variável de ambiente **REACT_APP_BASE_URL** que irá receber como valor a URL do Back-end que será acessada durante as requisições para obtenção dos dados. Você deve substituir "<YOUR_BASE_URL_HERE>" pela URL do back-end que está utilizando.
Por exemplo caso esteja rodando o Back-end localmente em sua máquina e o mesmo esteja rodando na porta 3001 seu valor será "http://localhost:3001".
**Ex:** REACT_APP_BASE_URL=http://localhost:3001

## 5. Executando o servidor local

Após instalar as dependências do projeto com sucesso e configurar a variável de ambiente **BASE_URL**, execute o comando abaixo na raiz do projeto Front-end:

>npm start

Visite o endereço abaixo em um navegador para verificar que o servidor está sendo executado com sucesso:

### 🌍 <a href="http://localhost:3000">http://localhost:3000</a>

## 6. Executando os testes

Execute o comando abaixo na raiz do projeto Front-end para rodar os testes unitários:

>npm test

Ao executar o comando irá abrir uma lista com os arquivos de testes de cada componente. Mais abaixo, será exibida uma tabela com os percentuais de cobertura de cada componente assim como a cobertura total dos arquivos do projeto.

### Aplicação

![Print](public/print_theme_light.jpg?raw=true)
