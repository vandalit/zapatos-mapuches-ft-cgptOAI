import { createStore } from 'vuex';

const store = createStore({
  state: {
    carrito: [], // Inicializa el carrito
  },
  mutations: {
    AGREGAR_AL_CARRITO(state, producto) {
      state.carrito.push(producto); // Agrega un producto al carrito
    },
    ELIMINAR_DEL_CARRITO(state, index) {
      state.carrito.splice(index, 1); // Elimina un producto del carrito
    },
  },
  getters: {
    totalSinDescuento(state) {
      return state.carrito.reduce((total, producto) => total + producto.precio, 0);
    },
  },
});

export default store;

