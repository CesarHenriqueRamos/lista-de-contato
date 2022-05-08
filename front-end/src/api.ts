
import axios from 'axios';
import internal from 'stream';

export  const api = {
    selectUsers: async()=>{
       let response = await axios.get("http://127.0.0.1:8000/api/list");
       return response.data;
    },
    selectUserOne:async (id:string) => {
      let response = await axios.get("http://127.0.0.1:8000/api/list/"+id);
      return response.data;
    },
    updateUser: async (id:string,body:object) =>{
      let response = await axios.put("http://127.0.0.1:8000/api/updateUser/"+id,body);
      return response.data;
    },
    createUser: async (body:object) => {
      let response = await axios.post("http://127.0.0.1:8000/api/createUser",body);
      return response.data;
    },
    deleteUser: async (id:internal) => {
      let response = await axios.delete("http://127.0.0.1:8000/api/deleteUser/"+id);
      return response.data;
    }

 }
 