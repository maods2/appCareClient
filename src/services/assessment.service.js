import api from "./api";

class Assessment {
    create (data){
        return api.post('/api/daily/assessment/newdaily', data);
    }

    updateDaily (data){
        return api.put('/api/daily/assessment/updaily', data);
    }

    getAll (){
        return api.get('/api/daily/assessment/all');
    }
}

export default new Assessment();