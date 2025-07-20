<!-- AdScroller.vue -->
<template>
  <div class="ad-scroller" @mouseenter="pause" @mouseleave="resume">
    <div class="ad-container" ref="container">
      <div class="ad-track" :style="{ transform: `translateX(${translateX}px)` }">
        <slot></slot> <!-- 原始内容 -->
        <slot></slot> <!-- 复制内容以实现无缝循环 -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AdScroller',
  props: {
    speed: {
      type: Number,
      default: 1, // 滚动速度 (px/s)
    },
    delay: {
      type: Number,
      default: 0, // 初始延迟 (ms)
    },
  },
  setup(props) {
    const container = ref(null);
    const translateX = ref(0);
    const animationFrame = ref(null);
    let totalWidth = 0;

    const animate = () => {
      translateX.value -= props.speed / 60; // 每帧移动距离，基于 60fps
      if (translateX.value <= -totalWidth) {
        translateX.value += totalWidth; // 回到起点，实现首尾循环
      }
      animationFrame.value = requestAnimationFrame(animate);
    };

    const start = () => {
      setTimeout(() => {
        animationFrame.value = requestAnimationFrame(animate);
      }, props.delay);
    };

    const pause = () => {
      if (animationFrame.value) {
        cancelAnimationFrame(animationFrame.value);
      }
    };

    const resume = () => {
      // debugger
      // if (!animationFrame.value) {
        animationFrame.value = requestAnimationFrame(animate);
      // }
    };

    onMounted(() => {
      if (container.value) {
        const track = container.value.querySelector('.ad-track');
        totalWidth = track.scrollWidth / 2; // 总宽度除以2，因复制了一份
        start();
      }
    });

    onUnmounted(() => {
      if (animationFrame.value) {
        cancelAnimationFrame(animationFrame.value);
      }
    });

    return { container, translateX, pause, resume };
  },
};
</script>

<style scoped>
.ad-scroller {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.ad-container {
  width: 100%;
  overflow: hidden;
}

.ad-track {
  display: flex;
  width: 200%; /* 宽度翻倍以容纳复制内容 */
  transition: transform 0s; /* 禁用默认过渡，使用 JS 控制 */
}

:slotted(*) {
  flex-shrink: 0;
  width: auto;
  height: 100%;
}
</style>