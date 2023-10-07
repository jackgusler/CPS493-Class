<script setup lang="ts"> //setup makes it composition api
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
    <div class="container">
      <nav>
      </nav>
      <RouterView />
    </div>
  </header>
</template>

<style scoped>

</style>
