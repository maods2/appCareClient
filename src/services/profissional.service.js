import axios from 'axios';
const API_URL = 'https://appsaudebackend.herokuapp.com'
import authHeader from './auth-header';


class ProfissionalService {

    myProfile (data){
        return axios.post(API_URL + '/api/professional/data/myprofile', data, { headers: authHeader() });
    }

    insertPatient (data){
        return axios.put(API_URL + 'api/professional/data/patientInsertion', data, { headers: authHeader() });
    }

    returnMyPatients (data){
        return axios.post(API_URL + '/api/professional/data/mypatients', data, { headers: authHeader() });
    }
}

export default new ProfissionalService();