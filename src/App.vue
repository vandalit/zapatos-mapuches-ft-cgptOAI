<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Zapatos Mapuche</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/zapatos">Zapatos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/promocion">Zapatos en Promoción</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/accesorios">Accesorios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/checkout">Checkout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Cart /> <!-- Componente del carrito visible en todas las páginas -->

    <router-view /> <!-- Área donde se renderizarán las vistas -->
  </div>
</template>

<script>
import Cart from './components/Cart.vue'; // Importar el componente Cart

export default {
  name: 'App',
  components: {
    Cart, // Registrar el componente
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  margin-bottom: 20px;
}
</style>
