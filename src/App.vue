<script setup>
import { NavBar } from './components'
</script>

<template>
  <!-- topbar -->
  <header>
    <NavBar />
  </header>
  <div class="d-flex flex-lg-row flex-sm-column">
    <div class="d-flex w-100 min-vh-100">
      <div class="w-50 bg-primary">1</div>
      <div class="w-50 bg-secondary">2</div>
    </div>
    <div class="w-50 bg-danger">3</div>
  </div>
</template>



<style scoped></style>
