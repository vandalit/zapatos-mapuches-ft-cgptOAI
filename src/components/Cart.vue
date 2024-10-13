<template>
  <div class="cart">
    <h3 class="cart__header">Carrito de Compras</h3>
    <ul class="list-group">
      <li class="list-group-item cart__item" v-for="(producto, index) in carrito" :key="index">
        {{ producto.nombre }} - ${{ producto.precio }}
        <button @click="eliminarDelCarrito(index)" class="btn btn-danger btn-sm cart__remove-button">Eliminar</button>
      </li>
    </ul>
    <h4 class="cart__total">Total: ${{ total }}</h4>
    <h5 v-if="total >= 100000">¡Felicidades! Tienes un descuento del 11%.</h5>
    <h5 v-else-if="total > 0">¡Aprovecha! Tienes un descuento del 5%.</h5>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState(['carrito']),
    total() {
      return this.carrito.reduce((sum, producto) => sum + producto.precio, 0);
    },
  },
  methods: {
    ...mapMutations(['ELIMINAR_DEL_CARRITO']),
    eliminarDelCarrito(index) {
      this.ELIMINAR_DEL_CARRITO(index);
    },
  },
};
</script>

<style scoped>
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
