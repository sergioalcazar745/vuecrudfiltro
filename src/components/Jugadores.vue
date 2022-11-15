<template>
    <div class="container">
        <table class="table">
            <thead>
                <th>Nombre</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                <tr v-for="jugador in jugadores" :key="jugador">
                    <td>{{jugador.nombre}}</td>
                    <td><img :src="jugador.imagen" width="150"/></td>
                    <td><router-link :to="'/jugador/' + jugador.idJugador" class="btn btn-primary">Detalles</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import JugadorService from './../services/JugadorService';

const serviceJugador = new JugadorService();

export default {
    name: 'JugadoresComponent',

    data() {

        return {
            jugadores: []
        };

    },

    watch: {

        '$route.params.id'(newVal, oldVal){
            if(newVal != oldVal){
                this.getJugadores()
            }
        }

    },

    methods: {

        getJugadores(){

            serviceJugador.getAllJugadoresById(this.$route.params.id).then(result => {
                this.jugadores = result;
            })

        }

    },

    mounted() {

        this.getJugadores();

    },

};
</script>

<style scoped>

</style>