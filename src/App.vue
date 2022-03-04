<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <router-view/>
  {{$router.getRoutes()}}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
