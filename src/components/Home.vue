<template>
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Click the button to navigate to the About page!</p>
      <button @click="goToAboutPage">Go to About Page</button>
    </div>
  </template>
  
  <script setup>
    /**
      * TODO 4:
      * Implement the goToAboutPage() method that navigates to the About page
      * Hint: Use the $router.push() method
    */
    function goToAboutPage() {}
  </script>