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
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
