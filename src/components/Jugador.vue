<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-if="jugador">
            <img :src="jugador.imagen" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{jugador.nombre}}</h5>
                <p class="card-text">{{jugador.pais}}</p>
                <router-link to="/" class="btn btn-danger">Volver</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import JugadorService from './../services/JugadorService';

const serviceJugador = new JugadorService();

export default {
    name: 'JugadorComponent',

    data() {

        return {
            jugador: null
        };

    },

    watch: {

        '$route.params.nombre'(newVal, oldVal){
            if(newVal != oldVal){
                this.getJugador();
            }
        }

    },

    methods: {

        getJugador(){

            serviceJugador.getJugadorByNombre(this.$route.params.nombre).then(result => {
                this.jugador = result[0];
            })

        }

    },

    mounted() {

        this.getJugador();

    },

};
</script>

<style scoped>

</style>