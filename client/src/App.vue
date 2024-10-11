<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Full-height flex container to make the footer stay at the bottom -->
  <div class="flex flex-col min-h-screen">
    <header class="text-white">
      <!-- Navigation area with padding and background for clarity -->
      <nav class="container">
        <!-- Add your navigation here -->
      </nav>
    </header>

    <!-- Main content area grows to fill available space -->
    <main class="flex-grow container">
      <RouterView />
    </main>

    <!-- Footer at the bottom, with padding for mobile responsiveness -->
    <footer class="text-white p-4">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
</style>
