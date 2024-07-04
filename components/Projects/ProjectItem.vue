<template>
  <div class="my-6 bg-red-400">
    {{ projectItem.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectItem",
  props: {
    projectItem: {
      type: Object,
      required: true,
    },
  },
});
</script>
