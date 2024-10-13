<template>
  <div class="text-center">
    <h1>404 - Página No Encontrada</h1>
    <p>Lo sentimos, la página que estás buscando no existe.</p>
    <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-top: 50px;
}
</style>
