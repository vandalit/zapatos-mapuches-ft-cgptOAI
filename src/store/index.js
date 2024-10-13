import { createStore } from 'vuex';

const store = createStore({
  state: {
    carrito: JSON.parse(localStorage.getItem('carrito')) || [], // Cargar el carrito desde localStorage
  },
  mutations: {
    AGREGAR_AL_CARRITO(state, producto) {
      state.carrito.push(producto); // Agrega un producto al carrito
      localStorage.setItem('carrito', JSON.stringify(state.carrito)); // Guardar el carrito en localStorage
    },
    ELIMINAR_DEL_CARRITO(state, index) {
      state.carrito.splice(index, 1); // Elimina un producto del carrito
      localStorage.setItem('carrito', JSON.stringify(state.carrito)); // Actualizar localStorage
    },
  },
  getters: {
    totalSinDescuento(state) {
      return state.carrito.reduce((total, producto) => total + producto.precio, 0);
    },
  },
});

export default store;
