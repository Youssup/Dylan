<script setup lang="ts">
</script>

<template>
    <div class="max-w-md mx-auto p-8 rounded-md shadow-md form-container justify-center">
    <h2 class="text-2xl font-semibold text-white mb-6">Get In Touch!</h2>
    <form action="https://fabform.io/f/insert-form-id" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-gray-300 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white">
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Reach out to me!" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></textarea>
      </div>
      <button type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Send Message
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
      animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
</style>