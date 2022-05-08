<h2>Processos de instalação</h2>
<p>baixar o projeto</p>
#Instalação do Back End
  <h3>Verificar a Instalação</h3>
    <ul>
      <li>php</li>
      <li>mysql</li>
      <li>npm</li>
    </ul>
    <p>cd api</p>
    <p>composer install</p>
  <h4>Configuração do banco de dados</h4>
    <p>ir em .env e configurar</p>
    <p>DB_DATABASE=nome_do_banco</
    <p>DB_USERNAME=nome_do_usuario</p>
    </p>DB_PASSWORD=senha_do_usuario</p>
    <p>caso não tenha o .env duplique o .env.example e renomeie o arquivo para .env</p>
    <h5>execultar o migrate cara criar as tabelas no banco</h5>
      <p>php artisan migrate</p>
  <h4>Para rodar o a API </h4>
    <p>php artisan serve</p> 

#Instalar o Front End
  <p>cd front-end</p>
  <h4>Para instalar as dependencias</h4>
    <p>npm install</p>
  <h4>Rodar o projeto</h4>
    <p>npm start</p>
  
