<template>
  <div class="text-center">
    <h1>¡Compra Confirmada!</h1>
    <p>Gracias por tu compra, {{ nombre }}.</p>
    <p>Tu número de orden es: <strong>{{ numeroOrden }}</strong></p>
    <router-link to="/" class="btn btn-primary mt-4">Volver a la tienda</router-link>
  </div>
</template>

<script>
export default {
  name: 'ConfirmacionView',
  data() {
    return {
      nombre: 'Cliente', // Esto puede ser pasado desde el checkout
      numeroOrden: Math.floor(Math.random() * 10000), // Generar un número de orden aleatorio
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-top: 50px;
}
</style>
