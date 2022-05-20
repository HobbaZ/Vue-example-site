<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
  <h3>Vue-Example-Site, {{ new Date().getFullYear() }} </h3>
  </footer>
</template>