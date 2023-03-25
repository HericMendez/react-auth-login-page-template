import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'José Placeholder', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {

        const response = await api.post('/login/user/login', { email, password });
        return {
            user: { id: 3, name: 'User01', email: email },
            token: response.data.token
        };
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    },

    getFarms: async (token: string, setFarms: Dispatch<SetStateAction<[]>>) =>{
        await api
        .get('/company/farm', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          setFarms(response.data.farms)
          }
        )
        .catch(e => console.log(e));
    },

     getGateways:  async (token: string, setGatewayList: Dispatch<SetStateAction<[]>>)=> {
        await api
          .get('/products/gateway', {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then(response => {
            console.log(response.status);
            setGatewayList(() => response.data.gateways);
          })
          .catch(e => console.log(e));
      },

      getDevices:  async (token: string, setDeviceList: Dispatch<SetStateAction<[]>>)=> {
        await api
          .get('/products/device', {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then(response => {
            console.log(response.status);
            setDeviceList(() => response.data.devices);
          })
          .catch(e => console.log(e));
      }
});