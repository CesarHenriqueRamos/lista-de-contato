
import { useState } from 'react';
import { isTemplateExpression } from 'typescript';
import { api } from '../../api';
import './style.css';
const User = () => {

    const [users,setUser] = useState([]);

    const loadUsers = async () => {
        let json = await api.selectUsers();
        setUser(json);
    }
    return(
        <div className='body'>
            <h2>List</h2>
            { users.map((item,index) =>( }
            <div>{item.name}</div>
            {)}
        </div>
    )

}

export default User;