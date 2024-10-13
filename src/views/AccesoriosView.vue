<template>
  <div>
    <h1>Accesorios Disponibles</h1>
    <div class="row">
      <div class="col-md-4" v-for="accesorio in accesorios" :key="accesorio.id">
        <div class="card mb-4">
          <img :src="accesorio.imagen" class="card-img-top" :alt="accesorio.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ accesorio.nombre }}</h5>
            <p class="card-text">{{ accesorio.descripcion }}</p>
            <p><strong>Precio: ${{ accesorio.precio }}</strong></p>
            <button class="btn btn-primary">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AccesoriosView',
  data() {
    return {
      accesorios: [], // Inicializa un array para almacenar los accesorios
    };
  },
  mounted() {
    // Al montar el componente, carga los datos de accesorios
    axios.get('/data/accesorios.json').then((response) => {
      this.accesorios = response.data.productos; // Asigna los datos a la variable accesorios
    });
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
