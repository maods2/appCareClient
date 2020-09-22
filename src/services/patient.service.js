import axios from 'axios';
const API_URL = 'https://appsaudebackend.herokuapp.com/'
import authHeader from './auth-header';


class PatientService {
    insertProfissional (data){
        return axios.put(API_URL + '/api/patient/data/professionalInsertion', data, { headers: authHeader() });
    }

    returnMyProfissionals (data){
        return axios.post(API_URL + '/api/professional/data/myprofissional', data, { headers: authHeader() });
    }
}

export default new PatientService();