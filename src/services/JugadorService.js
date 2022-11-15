import Global from "@/Global";
import axios from "axios";

export default class JugadorService{
    
    getAllJugadores(){
        return new Promise(function (resolve){
            var request = Global.url + "api/jugadores";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getAllJugadoresById(id){
        return new Promise(function (resolve){
            var request = Global.url + "api/jugadores/jugadoresequipo/" + id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getJugadorById(){
        return new Promise(function(resolve){
            var request = Global.url + "";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getJugadorByNombre(nombre){
        return new Promise(function(resolve){
            var request = Global.url + "api/Jugadores/BuscadorJugadores/" + nombre;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

}