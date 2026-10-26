Clone do Orkut
Aplicação web inspirada no Orkut, desenvolvida para praticar React, TypeScript e integração com uma API REST simulada.

O projeto reúne páginas de perfil, amigos, comunidades e um mural de recados com criação, edição e exclusão. O foco é aprender a organizar uma aplicação React e oferecer feedback ao usuário durante as operações.
Projeto de estudo e portfólio, em desenvolvimento. Não possui vínculo com o Orkut original.

Funcionalidades implementadas
- Navegação entre início, perfil, amigos, comunidades e recados.
- Rota de perfil com parâmetro de identificação do usuário.
- Consulta de usuários na API simulada.
- Listagem, criação, edição e exclusão de recados.
- Validação para impedir publicação e edição de mensagens vazias.
- Modal de confirmação para salvar alterações e excluir recados.
- Cancelamento da edição de um recado.
- Notificações de sucesso e erro com um sistema de toasts.
- Indicadores de carregamento e processamento.
- Desabilitação de ações durante o salvamento.
- Mensagem quando não existem recados publicados.
- Persistência dos recados no arquivo local da API simulada.
Tecnologias
Tecnologia	Uso no projeto
React	Construção da interface com componentes
TypeScript	Definição de tipos e contratos de dados
Vite	Ambiente de desenvolvimento e geração do build
React Router	Navegação e rotas com parâmetros
Bootstrap	Estilização e organização do layout
Bootstrap Icons	Ícones dos botões e da interface
Context API	Compartilhamento do sistema de notificações
Fetch API	Requisições HTTP
JSON Server	API REST simulada a partir do arquivo db.json
Oxlint	Análise estática do código


Como funciona
A interface chama hooks e serviços para consultar ou alterar os dados.

No mural de recados:
1. O componente apresenta o formulário e a lista de mensagens.
2. O hook useScraps coordena carregamento, salvamento e atualização do estado.
3. O serviço scrapService realiza as requisições HTTP.
4. O JSON Server consulta ou altera os registros em db.json.
5. A interface apresenta o resultado por meio da lista atualizada e dos toasts.
A aplicação utiliza dados locais e uma API simulada. Não existe autenticação real nem autorização de operações por usuário.
Requisitos
- Git.
- Node.js 24.x com npm.
- Um navegador atualizado.
A versão indicada é uma referência para preparar o ambiente. O repositório ainda não fixa a versão do Node.js em um arquivo próprio.

Confira a instalação:
git --version
node --version
npm --version
Executar localmente
1. Obter o projeto
Se você ainda não possui uma cópia local:
git clone https://github.com/devhome915/orkut.git
cd orkut
Se já possui o projeto, abra o terminal na pasta que contém package.json e db.json.
2. Instalar as dependências
npm ci
O comando instala as dependências de acordo com o package-lock.json.
3. Configurar o endereço da API
Copie .env.example para um arquivo chamado .env.local na raiz do projeto.

No Windows, usando PowerShell:
Copy-Item .env.example .env.local
No Linux ou macOS:
cp .env.example .env.local
Conteúdo esperado:
VITE_API_URL=http://localhost:3000
Variável	Descrição	Valor local
VITE_API_URL	Endereço base da API	http://localhost:3000


Sem essa configuração, o código utiliza http://localhost:3000 como endereço padrão.

O arquivo .env.local é ignorado pelo padrão *.local do .gitignore atual. Variáveis com prefixo VITE_ ficam disponíveis no navegador: não coloque senhas ou chaves privadas nelas.

Reinicie o servidor do Vite após alterar a configuração.
4. Iniciar a API simulada
No primeiro terminal, na raiz do projeto:
npx json-server db.json --port 3000
Mantenha esse terminal aberto. Para verificar a API, acesse:
- Usuários: http://localhost:3000/users
- Recados: http://localhost:3000/scraps
- Dados de comunidades: http://localhost:3000/communities
O recurso /communities está disponível no arquivo da API; isso não significa que todas as telas utilizem esse endpoint.
5. Iniciar a interface
Abra um segundo terminal na mesma pasta:
npm run dev
Acesse o endereço informado pelo Vite, normalmente:

http://localhost:5173

A API e a interface precisam permanecer em execução ao mesmo tempo para testar os recursos que dependem de requisições.
Rotas da aplicação
Rota	Página ou comportamento
/	Página inicial
/perfil	Redirecionamento para o perfil do usuário definido localmente
/perfil/:id	Página de perfil com identificador na URL
/recados	Mural de recados
/amigos	Página de amigos
/comunidades	Página de comunidades


Exemplo de rota de perfil: /perfil/1.

O projeto utiliza BrowserRouter. Em uma futura publicação, a hospedagem deverá permitir o carregamento de index.html ao acessar diretamente as rotas da aplicação.
Comandos disponíveis
Execute os comandos na raiz do projeto.
Comando	Finalidade
npm ci	Instalar as dependências a partir do arquivo de lock
npm run dev	Iniciar o servidor de desenvolvimento
npx json-server db.json --port 3000	Iniciar a API simulada
npm run lint	Executar a análise estática com Oxlint
npm run build	Verificar os projetos TypeScript e gerar o build com Vite
npm run preview	Visualizar localmente um build já gerado


Para verificar o código e gerar o build:
npm run lint
npm run build
Para visualizar o resultado do build:
npm run preview
Abra o endereço informado pelo terminal. A API deve continuar em execução para os recursos que dependem dela.

O comando de preview serve para conferir o build localmente; não publica o projeto.
Organização do código
Diretório ou arquivo	Responsabilidade
src/components/	Componentes da interface, incluindo recados, modal e toasts
src/contexts/	Contexto e provedor das notificações
src/hooks/	Hooks para recados e acesso ao sistema de toasts
src/layouts/	Estrutura compartilhada entre as páginas
src/pages/	Páginas utilizadas nas rotas
src/services/	Configuração da API e requisições HTTP
src/types/	Tipos dos usuários, comunidades e recados
src/data/	Dados locais de apoio
src/assets/	Estilos e imagens
src/App.tsx	Definição das rotas
src/main.tsx	Inicialização do React, roteador e provedor de toasts
db.json	Registros da API simulada
.env.example	Exemplo da configuração de ambiente


API de recados
Método	Endpoint	Operação
GET	/scraps	Listar recados
POST	/scraps	Criar um recado
PATCH	/scraps/:id	Atualizar a mensagem
DELETE	/scraps/:id	Excluir um recado


Exemplo de dados enviados ao criar um recado:
{
  "author": "Usuário de demonstração",
  "message": "Olá! Este é um recado de teste.",
  "createdAt": "2026-10-26T12:00:00.000Z"
}
O identificador é retornado pela API após a criação.
Roteiro de validação manual
Com a API e a interface em execução:
1. Abra a página de recados e confira a listagem.
2. Publique uma mensagem e confira o toast de sucesso.
3. Atualize a página para verificar a persistência.
4. Tente publicar uma mensagem composta apenas por espaços; o envio deve permanecer desabilitado.
5. Edite um recado e cancele a edição; a mensagem original deve continuar aparecendo.
6. Edite novamente, salve e confirme no modal; confira a atualização.
7. Clique em excluir e cancele no modal; o recado deve permanecer na lista.
8. Repita a exclusão e confirme; o recado deve desaparecer.
9. Interrompa a API com Ctrl+C no terminal correspondente e tente publicar uma mensagem; confira o feedback de erro e a preservação do texto digitado.
10. Inicie a API novamente e repita a operação.
As operações modificam o arquivo db.json. Utilize somente dados de demonstração e revise as alterações desse arquivo antes de fazer commits.

Esse roteiro documenta cenários para execução manual. Não representa uma suíte de testes automatizados nem um registro de testes executados.
Solução de problemas
A interface abre, mas os dados não carregam
- Confira se o JSON Server está em execução.
- Abra http://localhost:3000/users para verificar a resposta da API.
- Confira o valor de VITE_API_URL em .env.local.
- Reinicie o Vite caso tenha alterado a variável.
A porta 3000 está ocupada
Inicie a API em outra porta:
npx json-server db.json --port 3001
Atualize .env.local:
VITE_API_URL=http://localhost:3001
Depois reinicie o Vite.
O Vite usa outra porta
Utilize o endereço exibido no terminal. Quando a porta padrão está ocupada, o servidor pode iniciar em outra.
A instalação falha
Confira a versão do Node.js e leia a mensagem apresentada pelo npm. Preserve o arquivo de lock para manter a instalação reproduzível; não o exclua como primeira tentativa de correção.
Limitações atuais
- O backend é simulado com JSON Server e armazenamento em arquivo.
- Não há autenticação real, controle de acesso ou isolamento de dados por usuário.
- O usuário que publica recados é definido localmente.
- Parte dos dados da aplicação é mantida em arquivos locais.
- Ainda não há suíte de testes automatizados ou workflow de integração contínua na branch principal examinada.
- A navegação por teclado e o gerenciamento de foco do modal ainda precisam de melhorias.
- A publicação de uma demonstração completa, com API acessível, permanece como próxima etapa.
Próximas melhorias
- Adicionar capturas reais da interface a esta documentação.
- Configurar verificações de lint e build em Pull Requests.
- Criar testes para os fluxos principais de recados e falhas da API.
- Melhorar o foco e a navegação por teclado no modal.
- Validar o comportamento em diferentes tamanhos de tela.
- Publicar uma demonstração e documentar suas limitações.
- Evoluir a API e implementar autenticação e autorização.
Autor
Desenvolvido por Alex dos Santos como projeto de estudo e portfólio.
