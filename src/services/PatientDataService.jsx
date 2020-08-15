import axios from "axios";
const URL ="http://localhost:1998"

class PatientDataService {
     getAllPatients(name){
        console.log("geting all patients");
        return axios.get(`${URL}/getpatients`)
    }

    addPatient(data){
        console.log("Adding new patient");
        return axios.post(`${URL}/addpatient`, data)
    }
    deletePatient(id) {
        //console.log('executed service')
        return axios.delete(`${URL}/patients/${id}`);
      }
    
      retrievePatientById(name, id) {
        return axios.get(`${URL}/patients/${id}`);
      }
}
 
export default new PatientDataService();