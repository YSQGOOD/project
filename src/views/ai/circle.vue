<template>
  <div class="ai-page">
    <div class="container">
      <!-- 大圆容器 -->
      <div class="big-circle">
        <!-- 小圆 -->
        <div
          v-for="(item, index) in items"
          :key="item"
          :class="`small-circle small-circle-${item}`"
          :style="{
            '--translateX': `${radius}px`,
            '--initialRotate': `${index * (360 / items.length)}deg`,
            '--animationDelay': `-${index * (40 / items.length)}s`
          }"
        >

          <div class="small-circle-text">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([]);
for (let i = 1; i <= 36; i++) {
  items.value.push(i);
}
const radius = ref(500); // Translation radius (half of big-circle width)
</script>
<style scoped>
.ai-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
}

/* 大圆 */
.big-circle {
  margin-top: 1000px;
  width: 1000px;
  height: 1000px;
  border: 2px solid #333;
  border-radius: 50%;
  position: relative;
}

/* 小圆通用样式 */
.small-circle {
  width: 80px;
  height: 80px;
  background-color: #ff4d4f;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -40px 0 0 -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  animation: rotate 40s linear infinite;
  animation-delay: var(--animationDelay);
  transform: rotate(var(--initialRotate)) translate(var(--translateX), 0);
}

/* 小圆内的文字保持正向 */
.small-circle-text {
  content: "";
  display: block;
  transform: rotate(calc(-2 * var(--initialRotate)));
  animation: counterRotate 40s linear infinite;
  animation-delay: inherit;
}

/* 文字反向旋转动画 */
@keyframes counterRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* 圆周运动动画 */
@keyframes rotate {
  from {
    transform: rotate(0deg) translate(var(--translateX), 0);
  }
  to {
    transform: rotate(360deg) translate(var(--translateX), 0);
  }
}
</style>