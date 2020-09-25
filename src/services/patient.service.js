import axios from 'axios';
// const API_URL = 'https://appsaudebackend.herokuapp.com/'
import authHeader from './auth-header';
const API_URL = 'http://localhost:3030';



class PatientService {
    insertProfissional (data){
        return axios.put(API_URL + '/api/patient/data/professionalInsertion', data, { headers: authHeader() });
    }

    returnMyProfissionals (data){
        return axios.post(API_URL + '/api/professional/data/myprofissional', data, { headers: authHeader() });
    }

    novaAvaliacaoDiaria (data){
        return axios.put(API_URL + '/api/daily/assessment/newdaily', data, { headers: authHeader() });
    }

    getAvaliacaoDiaria (data){
        return axios.post(API_URL + '/api/daily/assessment/user', data, { headers: authHeader() });
    }

    updateAvaliacaoDiaria (data){
        return axios.put(API_URL + '/api/daily/assessment/updaily', data, { headers: authHeader() });
    }
    
}

export default new PatientService();