<template>
  <div>
    <h1>Checkout</h1>
    <form @submit.prevent="procesarCheckout">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre completo</label>
        <input type="text" v-model="nombre" id="nombre" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" v-model="telefono" id="telefono" class="form-control" required pattern="[0-9]{10}" />
      </div>

      <Cart /> <!-- Componente del carrito -->

      <button type="submit" class="btn btn-primary">Confirmar Compra</button>
    </form>
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'; // Asegúrate de importar el componente Cart
import { mapState } from 'vuex';

export default {
  name: 'CheckoutView',
  components: {
    Cart, // Registra el componente
  },
  data() {
    return {
      nombre: '',
      email: '',
      telefono: '',
    };
  },
  computed: {
    ...mapState(['carrito']), // Mapea el carrito del estado de Vuex
  },
  methods: {
    procesarCheckout() {
      if (this.carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de proceder.');
        return;
      }
      alert(`Compra confirmada para ${this.nombre}`);
      // Aquí podrías agregar lógica adicional como redirigir a la página de confirmación
    },
  },
};
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1rem;
}
</style>
