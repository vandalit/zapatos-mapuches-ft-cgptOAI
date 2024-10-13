<template>
  <div>
    <h1>Zapatos Disponibles</h1>
    <div class="row">
      <div class="col-md-4" v-for="zapato in zapatos" :key="zapato.id">
        <div class="card mb-4">
          <img :src="zapato.imagen" class="card-img-top" :alt="zapato.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ zapato.nombre }}</h5>
            <p class="card-text">{{ zapato.descripcion }}</p>
            <p><strong>Precio: ${{ zapato.precio_normal }}</strong></p>
            <button class="btn btn-primary" @click="agregarAlCarrito(zapato)">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex'; // Asegúrate de importar esto correctamente

export default {
  name: 'ZapatosView',
  data() {
    return {
      zapatos: [], // Inicializa un array para almacenar los zapatos
    };
  },
  mounted() {
    // Al montar el componente, carga los datos de zapatos
    axios.get('/data/productos.json').then((response) => {
      this.zapatos = response.data.productos; // Asigna los datos a la variable zapatos
    });
  },
  methods: {
    ...mapMutations(['AGREGAR_AL_CARRITO']), // Asegúrate de que este nombre coincida con la mutación en el store
    agregarAlCarrito(zapato) {
      this.AGREGAR_AL_CARRITO(zapato); // Llama a la mutación para agregar el zapato al carrito
      alert(`${zapato.nombre} ha sido agregado al carrito!`);
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
