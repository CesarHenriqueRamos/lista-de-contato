
import React ,{ useState } from 'react';
import './style.css';
import { api } from '../../api';
import { useParams,useNavigate } from 'react-router-dom';

export const UpdateUser = () => {

    const [firstName, setFirtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const { id } = useParams();
    const navegate = useNavigate();
    var idUser:string = (id) ? id : '';
    
    const selectUserOne = async () => {
        let response = await api.selectUserOne(idUser);
            if(response.error === ""){
                setFirtName(response.list_item.first_name);
                setLastName(response.list_item.last_name);
                setCpf(response.list_item.cpf);
                setRg(response.list_item.rg);
                setPhone(response.list_item.phone);
                setEmail(response.list_item.email);
                setWhats(response.list_item.whatsapp);
            }
    }
    

    const update = async (e:React.FormEvent) => {
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


        let response = await api.updateUser(idUser,body);
            if(response.error === ""){
                setFirtName('');
                setLastName('');
                setCpf('');
                setRg('');
                setPhone('');
                setEmail('');
                setWhats('');
            }
            navegate('/list');
        
    }
    
    React.useEffect(() =>{        
        selectUserOne();
    },[]);
    return(
        <div className='body'>
            <div className='title'>
                <h2>Atualizando Contato</h2>               
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
                        <button onClick={update} className="submit">Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}