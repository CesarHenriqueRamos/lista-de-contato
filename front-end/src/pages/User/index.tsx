
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import internal from 'stream';
import { api } from '../../api';
import { UserType} from '../../types/User';
import './style.css';
export const User = () => {

    const [users,setUser] = useState<UserType[]>([]);
    const navegate = useNavigate();

    const loadUsers = async () => {
        let json = await api.selectUsers();
        if(json.error === ""){
            setUser(json.list);
        }        
    }
    const deleteItem = async (id: internal) => {
        await api.deleteUser(id);
        loadUsers();
    }
    const updateUser = (id:internal) =>{
        let url= "/update/"+id;
        navegate(url);
    }

    React.useEffect(() =>{
        loadUsers();
    },[]);
    
    return(
        <div className='body'>
            <div className='title'>
                <h2>Lista de Contatos</h2>               
            </div>
            <div className='groupCards'>
                
            {users.map((peaple,index)=>(
                <div key={index} className="card">
                    <div className='dataPeaple'>
                        <h3><strong>Nome</strong>: {peaple.first_name} {peaple.last_name}</h3>
                        <p><strong>Cpf</strong>:{peaple.cpf}</p>
                        <p><strong>RG</strong>: {peaple.rg}</p>
                    </div>
                    <div className='contact'>
                        <p><strong>Contatos:</strong></p>
                        <p><strong>Telefone</strong>:{peaple.phone}</p>
                        <p><strong>Email</strong>:{peaple.email}</p>
                        <p><strong>Whatsapp</strong>:{peaple.whatsapp}</p>
                    </div>
                    <div className='buttons'>
                        <button className='green' onClick={()=>updateUser(peaple.id)}>Editar</button>
                        <button className='red' onClick={()=>deleteItem(peaple.id)}>Deletar</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )

}
