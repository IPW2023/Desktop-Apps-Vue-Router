<template>
  <div id="app">
    <nav>
      <!-- 
        TODO 7:
        Add the RouterLink component in order to use the vue router
        Hint: use the 'to=' attribute to specify the route. Put some text between the opening and closing tags to display the link text.
      -->
    </nav>
    <!-- 
      TODO 8: 
      Add the RouterView component in order to use the vue router
     -->
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>