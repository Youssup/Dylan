<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Carousel from '../components/CarouselComponent.vue';

const currentTime = ref(new Date().toLocaleString());

const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const [time, period] = timeString.split(' ');
  const formattedTime = `${now.toLocaleDateString()} ${time}.${now.getMilliseconds()} ${period}`;
  currentTime.value = formattedTime;
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 100);
});
</script>

<template>
  <!-- Adjust text size and margins for mobile responsiveness -->
  <p class="text-white ml-2 text-sm md:text-base">{{ currentTime }}</p>
  
  <!-- Flex container for centering the carousel -->
  <div class="flex flex-grow items-center justify-center p-4">
    <div class="w-full max-w-md lg:max-w-lg">
      <!-- Limit the carousel width on smaller screens -->
      <Carousel />
    </div>
  </div>
</template>

<style scoped>
</style>
