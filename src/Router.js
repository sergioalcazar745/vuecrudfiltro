import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Home.vue';
import EquipoComponent from './components/Equipo.vue';
import JugadoresComponent from './components/Jugadores.vue';
import JugadorComponent from './components/Jugador.vue';

const routes = [
    {
        path: "/", component: HomeComponent
    },

    {
        path: "/equipo/:id", component: EquipoComponent
    },

    {
        path: "/jugadores/:id", component: JugadoresComponent
    },

    {
        path: "/jugador/:nombre", component: JugadorComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;