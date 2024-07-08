<template>
  <div
    class="text-4xl mt-2 max-w-min flex flex-nowrap font-cairo transition duration-500 ease-in-out"
  >
    <span class="border-b-2">{{ currentTitle }}</span>
    <span class="ml-2">developer</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  type PropType,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "DeveloperTitles",
  props: {
    titles: {
      type: Array as PropType<string[]>,
      required: true,
    },
    interval: {
      type: Number,
      default: 2000,
    },
  },
  setup(props) {
    const currentTitleIndex = ref(0);
    const timerId = ref<ReturnType<typeof setInterval> | null>(null);

    const currentTitle = computed(() => {
      return props.titles[currentTitleIndex.value];
    });

    const rotateTitles = () => {
      timerId.value = setInterval(() => {
        currentTitleIndex.value =
          (currentTitleIndex.value + 1) % props.titles.length;
      }, props.interval);
    };

    const stopRotation = () => {
      if (timerId.value) {
        clearInterval(timerId.value);
        timerId.value = null;
      }
    };

    onMounted(() => {
      rotateTitles();
    });

    onBeforeUnmount(() => {
      stopRotation();
    });

    return {
      currentTitle,
    };
  },
});
</script>
