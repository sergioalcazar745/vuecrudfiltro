import Global from "@/Global";
import axios from "axios";

export default class EquipoService{

    getAllEquipos(){
        return new Promise(function (resolve){
            var request = Global.url + "api/equipos";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getEquipoById(id){
        return new Promise(function(resolve){
            var request = Global.url + "api/equipos/"+id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

}