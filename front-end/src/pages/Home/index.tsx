
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import {
  faAddressBook
} from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    return(
        <div className='body'>
            <div className='icon'>
                <FontAwesomeIcon icon={faAddressBook} size="8x" color="#040f0ee1" />
            </div>
            <div className='information'>
                <div>
                    <h2>Cadastre sua lista de Contatos</h2>
                    <p>Aproveitando para deixar seus contatos organizados em sua agenda digital</p>
                </div>
            </div>
        </div>

    )
}

export default Home;