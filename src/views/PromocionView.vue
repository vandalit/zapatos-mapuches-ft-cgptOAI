<template>
  <div>
    <h1>Zapatos en Promoción</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Zapatos">Zapatos</RouterLink>
        <RouterLink to="/Promocion">Promo</RouterLink>
        <RouterLink to="/Checkout">Checkout</RouterLink>
        <RouterLink to="/Confirmacion">Confirmacion</RouterLink>
        <RouterLink to="/Accesorios">Accesorios</RouterLink>
        <RouterLink to="/NotFoundView">404</RouterLink>
      </nav>
    <div class="row">
      <div class="col-md-4" v-for="zapato in zapatosPromo" :key="zapato.id">
        <div class="card mb-4">
          <img :src="zapato.imagen" class="card-img-top" :alt="zapato.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ zapato.nombre }}</h5>
            <p class="card-text">{{ zapato.descripcion }}</p>
            <p><strong>Precio Promocional: ${{ zapato.precio_promo }}</strong></p>
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
  name: 'PromocionView',
  data() {
    return {
      zapatosPromo: [], // Inicializa un array para almacenar los zapatos en promoción
    };
  },
  mounted() {
    // Al montar el componente, carga los datos de zapatos en promoción
    axios.get('/data/promocion.json').then((response) => {
      this.zapatosPromo = response.data.productos; // Asigna los datos a la variable zapatosPromo
    });
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
