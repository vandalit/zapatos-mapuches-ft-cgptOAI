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

    <div class="main-container">
      <Cart /> <!-- Componente del carrito visible en todas las páginas -->
      <div class="main-content">
        <router-view /> <!-- Área donde se renderizarán las vistas -->
      </div>
    </div>
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
  margin: 0; /* Eliminar el margen para evitar desplazamientos */
  padding: 0; /* Eliminar el padding */
}

.main-container {
  display: flex; /* Usar flex para organizar el contenido */
  flex-direction: row; /* Colocar el carrito y el contenido principal en una fila */
}

.navbar {
  margin-bottom: 20px;
  z-index: 10; /* Asegurar que el navbar esté sobre otros elementos */
}

.main-content {
  margin-left: 20%; /* Dejar espacio para el carrito */
  padding: 20px;
  flex-grow: 1; /* Tomar el resto del espacio */
}
</style>
