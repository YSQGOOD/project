<template>
  <div class="arcium-page">
    <!-- <object
      data="./src/components/html/arcium.html"
      ref="webPage"
      type="text/html"
      style="width: 100%; height: 99%;"
    ></object> -->
    <div class="carousel">
            <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: transition }" @transitionend="handleTransitionEnd">
                <div class="carousel-slide" v-for="(slide, index) in slidesWithClones" :key="index">
                    <img :src="slide.src" :alt="slide.alt">
                </div>
            </div>
            <button class="carousel-btn prev-btn" @click="prevSlide">◄</button>
            <button class="carousel-btn next-btn" @click="nextSlide">►</button>
            <div class="dots">
                <span class="dot" v-for="(slide, index) in slides" :key="index" :class="{ active: (currentIndex - 1 + slides.length) % slides.length === index }" @click="goToSlide(index + 1)"></span>
            </div>
        </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  defineAsyncComponent,
  onMounted,
  onUnmounted,
} from "vue";

const slides = ref([]);
const currentIndex = ref(null);
const isTransitioning = ref(null);
const transition = ref(null);

const slidesWithClones = computed(() => {
    return [
      slides.value[slides.value.length - 1], // 克隆最后一张到开头
      ...slides.value,
      slides.value[0] // 克隆第一张到结尾
    ];
});



slides.value = [
 
],
  currentIndex.value = 1 // 从克隆的第一张开始
  isTransitioning.value = false,
  transition.value = 'transform 0.5s ease' // 控制过渡动画

const goToSlide = (index, animate = true) => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  transition.value = animate ? 'transform 0.5s ease' : 'none';
  currentIndex.value = index;
}
const prevSlide = () => {
  goToSlide(currentIndex.value - 1);
}
const nextSlide = () => {
  goToSlide(currentIndex.value + 1);
}
const handleTransitionEnd = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = slides.value.length;
    transition.value = 'none'; // 无动画重置
  } else if (currentIndex.value === slides.value.length + 1) {
    currentIndex.value = 1;
    transition.value = 'none'; // 无动画重置
  }
  isTransitioning.value = false;
}
 let autoPlay = setInterval(() => {
    nextSlide();
  }, 3000);
onMounted(() => {
 

  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
  });
  carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);
  });
})


</script>

<style scoped>
.arcium-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}


        .carousel {
            width: 600px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
        }

        .carousel-container {
            display: flex;
            transition: transform 0.5s ease;
        }

        .carousel-slide {
            flex: 0 0 100%;
        }

        .carousel-slide img {
            width: 100%;
            height: auto;
            display: block;
        }

        .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 18px;
        }

        .prev-btn {
            left: 10px;
        }

        .next-btn {
            right: 10px;
        }

        .dots {
            text-align: center;
            padding: 10px 0;
        }

        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: #bbb;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
        }

        .dot.active {
            background: #333;
        }
</style>