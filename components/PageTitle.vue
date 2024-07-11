<template>
  <h1 class="text-6xl font-cairo" :aria-label="title">
    <span
      v-for="(letter, index) in titleLetters"
      :key="index"
      :style="getStyle(index)"
      class="fade-in hidden-letter"
    >
      {{ letter }}</span
    >
  </h1>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const titleLetters = computed(() => props.title.split(""));
    const getStyle = (index: number) => {
      return {
        animationDelay: `${index * 0.1}s`,
      };
    };
    return { titleLetters, getStyle };
  },
});
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  1% {
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.hidden-letter {
  visibility: hidden;
}
</style>
