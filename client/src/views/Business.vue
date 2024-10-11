<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async () => {
  try {
    console.log('Submitting form...');
    const response = await axios.post('https://formsubmit.co/ajax/dylanhannigan945@gmail.com', {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Form submitted successfully:', response);
    alert('Email sent successfully!');
    formData.value.name = '';
    formData.value.email = '';
    formData.value.message = '';
  } catch (error) {
    console.error('Error submitting form:', (error as any).response ? (error as any).response.data : (error as any).message);
    alert('Failed to send message. Please try again later.');
  }
};

</script>

<template>
  <div class="max-w-md mx-auto p-8 rounded-md shadow-md form-container justify-center">
    <h2 class="text-2xl font-semibold text-white mb-6">Business Inquiries</h2>
    <p class="text-white mb-6">
      If you're interested in collaborating, discussing merchandise, bookings, offers, shoutouts, media collaborations, or suggestions, feel free to reach out!
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-gray-300 text-sm font-bold mb-2">Your Name</label>
        <input v-model="formData.name" type="text" id="name" name="name" placeholder="Name" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Your Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" placeholder="Email" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white">
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
        <textarea v-model="formData.message" id="message" name="message" rows="4" placeholder="Reach out to me!" required
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
