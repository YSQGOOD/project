<template>
  <div class="arcium-page">
    <object
      data="./src/components/html/arcium.html"
      ref="webPage"
      type="text/html"
      style="width: 100%; height: 99%;"
    ></object>
  </div>
</template>

<script setup>
</script>

<style scoped>
.arcium-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>