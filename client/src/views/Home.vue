<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
  <p class="text-white ml-2">{{ currentTime }}</p>
</template>

<style scoped>
</style>