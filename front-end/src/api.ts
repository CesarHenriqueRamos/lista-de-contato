import axios from 'axios';
 const BASE = "http://127.0.0.1:8000/api"

export  const api = {
    selectUsers: async()=>{
       let response = await axios.get('${BASE}/');
       return response.data;
    }
 }
 