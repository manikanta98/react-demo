import axios from "axios";
const URL ="http://localhost:2020/"

class PatientDataService {
     getAllPatients(){
        console.log("geting all patients");
        return axios.get(`${URL}/getpatients`)
    }

    addPatient(data){
        console.log("Adding new patient");
        return axios.post(`${URL}/addpatients`, data)
    }
    deletePatient(id) {
        //console.log('executed service')
        return axios.delete(`${URL}/deletepatient/${id}`);
      }
    
      retrievePatientById(name, id) {
        return axios.get(`${URL}/getPatientsyById/${id}`);
      }
}
 
export default new PatientDataService();