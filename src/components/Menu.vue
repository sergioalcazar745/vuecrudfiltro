<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="./../assets/images/logo.png" width="30"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Jugadores
                        </a>
                        <ul class="dropdown-menu" style="max-height: 300px; overflow: auto;">
                            <li v-for="jugador in jugadores" :key="jugador">
                                <router-link :to="'/jugadores/' + jugador.idEquipo" class="dropdown-item">{{jugador.nombre}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Equipos
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="equipo in equipos" :key="equipo">
                                <router-link :to="'/jugadores/' + equipo.idEquipo" class="dropdown-item">{{equipo.nombre}}</router-link>
                            </li>                            
                        </ul>
                    </li>
                </ul>
            <form class="d-flex" role="search" @submit.prevent="filtro">
                <input class="form-control me-2" type="search" placeholder="Jugador" v-model="filtrarJugador">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
import EquipoService from './../services/EquipoService';
import JugadorService from './../services/JugadorService';

const serviceEquipo = new EquipoService();
const serviceJugador = new JugadorService();

export default {
    name: 'MenuComponent',

    data() {
        return {
            equipos: [],
            jugadores: [],
            filtrarJugador: null
        };
    },

    methods: {

        getEquipos(){
            serviceEquipo.getAllEquipos().then(result => {
                this.equipos = result
                console.log(this.equipos)
            })
        },

        getJugadores(){
            serviceJugador.getAllJugadores().then(result => {
                this.jugadores = result
                console.log(this.jugadores)
            })
        },

        filtro(){
            this.$router.push("/jugador/" + this.filtrarJugador)
        }
        
    },

    mounted() {
        this.getEquipos();
        this.getJugadores();
    },

};
</script>

<style scoped>

</style>