<template>
  <div>
    <h1>Bienvenido a la Tienda de Zapatos Mapuche</h1>
    <p>Explora nuestra selección de zapatos y accesorios.</p>
    <!-- <router-link to="/zapatos" class="btn btn-primary">Ver Zapatos</router-link>
    <router-link to="/promocion" class="btn btn-secondary">Zapatos en Promoción</router-link>
    <router-link to="/accesorios" class="btn btn-info">Ver Accesorios</router-link> -->
    <nav>
        <RouterLink to="/Zapatos">Zapatos</RouterLink>
        <RouterLink to="/Promocion">Promo</RouterLink>
        <RouterLink to="/Accesorios">Accesorios</RouterLink>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Estilos para la página de inicio */
h1 {
  margin-bottom: 20px;
}
</style>
