import axios from "axios";
const URL ="http://localhost:1998"

class PatientDataService {
     getAllPatients(name){
        console.log("geting all patients");
        return axios.get(`${URL}/getpatients`)
    }
    
}
 
export default new PatientDataService();