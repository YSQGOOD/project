<template>
  <div class="ateru-page">
    <object
      :data="htmlPath"
      ref="webPage"
      type="text/html"
      style="width: 100%; height: 99%;"
    ></object>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
} from "vue";
const htmlPath = ref('');

onMounted(() => {
  htmlPath.value = `${import.meta.env.BASE_URL}external/html/ateru.html`;
});



</script>

<style scoped>
.ateru-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style>