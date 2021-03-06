
import { useState } from 'react';
import './style.css';
import { api } from '../../api';
export const CreateUser = () => {

    const [firstName, setFirtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');

    const createUser = async (e:React.FormEvent) => {
        e.preventDefault();
        let body = {
            'first_name': firstName,
            'last_name': lastName,
            'cpf':cpf,
            'rg':rg,
            'phone':phone,
            'email':email,
            'whatsapp':whats
        }
        let response = await api.createUser(body);
            if(response.error === ""){
                setFirtName('');
                setLastName('');
                setCpf('');
                setRg('');
                setPhone('');
                setEmail('');
                setWhats('');
            }
        
    }
    return(
        <div className='body'>
            <div className='title'>
                <h2>Novo Contato</h2>               
            </div>
            <div className='formGroup'>
                <div className='form'>
                    <div className='groupItem'>
                        <label htmlFor="furst_name">Nome</label>
                        <input type="text"
                         name="furst_name"
                          id="furst_name"
                          value={firstName}
                          onChange={e=>setFirtName(e.target.value)}
                           />
                    </div>
                    <div className='groupItem'>
                        <label htmlFor="last_name">Sobrenome</label>
                        <input type="text"
                         name="last_name"
                          id="last_name"
                          value={lastName}
                          onChange={e=>setLastName(e.target.value)} />
                    </div>
                    <div className='groupItem'>
                        <label htmlFor="cpf">Cpf</label>
                        <input type="text"
                         name="cpf"
                          id="cpf"
                          value={cpf}
                          onChange={e=>setCpf(e.target.value)} />
                    </div>
                    <div className='groupItem'>
                        <label htmlFor="rg">Rg</label>
                        <input type="text"
                         name="rg"
                          id="rg"
                          value={rg}
                          onChange={e=>setRg(e.target.value)}
                           />
                    </div>                    
                    <div className='groupItem'>
                        <label htmlFor="phone">Telefone</label>
                        <input type="text"
                         name="phone"
                          id="phone"
                           value={phone}
                          onChange={e=>setPhone(e.target.value)} />
                    </div>
                    <div className='groupItem'>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                         name="email"
                          id="email"
                          value={email}
                          onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className='groupItem'>
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text"
                         name="whatsapp"
                          id="whatsapp"
                          value={whats}
                          onChange={e=>setWhats(e.target.value)} />
                    </div>
                    <div className='groupItem'>
                        {/* <input type="submit" value="Adicionar" /> */}
                        <button onClick={createUser} className="submit">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

