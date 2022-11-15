<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-if="equipo">
            <img :src="equipo.imagen" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{equipo.nombre}}</h5>
                <p class="card-text">{{equipo.descripcion}}</p>
                <a href="#" class="btn btn-primary">Jugadores</a>
            </div>
        </div>
    </div>
</template>

<script>
import EquipoService from './../services/EquipoService';

const serviceEquipo = new EquipoService();

export default {
    name: 'EquipoComponent',

    data() {

        return {
            equipo: null,
        };

    },

    mounted() {

        this.getEquipo();

    },

    watch:{

        '$route.params.id'(newVal, oldVal){
            if(newVal != oldVal){
                this.getEquipo()
            }
        }

    },

    methods: {

        getEquipo(){

            serviceEquipo.getEquipoById(this.$route.params.id).then(result => {
                this.equipo = result;
            })

        },

    }

};
</script>

<style scoped>

</style>