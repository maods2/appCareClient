import api from "./api";

class Goals {
    insertProfissional (data){
        return api.put('/api/goals/insert/profissional', data);
    }

    updateGoal (data){
        return api.put('/api/goals/up', data);
    }

    getAllGoalsByUserId (patient_id){
        return api.get('/api/goals/id', patient_id);
    }
}

export default new Goals();