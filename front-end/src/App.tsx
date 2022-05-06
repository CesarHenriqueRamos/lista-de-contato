import './app.css';
import {  Route,  Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import CreateUser from './pages/CreateUser';

let linguagePT = {
  title:'Contatos',
  home: 'Home',
  list: "Listar Usuários",
  create: 'Cadastrar Usuários'
};
// let linguageEN = {
//   title:'constact',
//   home: 'Home',
//   list: "List Users",
//   create: 'Cadastrar Usuarios'
// };
var linguage = linguagePT;



function App() {
  return (
    <div>
        <header>
          <h1>{linguage.title}</h1>
          <nav>
            <ul>
              <li>
                <Link  to="/">{linguage.home}</Link>
              </li>
              <li>
                <Link to="/list">{linguage.list}</Link>
              </li>
              <li>
                <Link to="/create">{linguage.create}</Link>
              </li>
   
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<User />} />  
            <Route path='/create' element={<CreateUser />} />
          </Routes>
        </div>
        <footer>
          <p>Todos os direitos reservados</p>
        </footer>
    </div>
  );
}

export default App;
