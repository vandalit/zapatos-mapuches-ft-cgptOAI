<template>
  <div>
    <h3>Carrito de Compras</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(producto, index) in carrito" :key="index">
        {{ producto.nombre }} - ${{ producto.precio }}
        <button @click="eliminarDelCarrito(index)" class="btn btn-danger btn-sm float-end">Eliminar</button>
      </li>
    </ul>
    <h4>Total: ${{ total }}</h4>
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
      this.ELIMINAR_DEL_CARRITO(index); // Llama a la mutación para eliminar del carrito
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

  