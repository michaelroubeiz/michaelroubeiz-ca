<template>
  <div class="grid grid-cols-2 gap-6 my-6 font-roboto-mono">
    <slot :projectList="projectList"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectItem from "./ProjectItem.vue";
import type { Project } from "~/types/Project";

export default defineComponent({
  name: "ProjectList",
  components: { ProjectItem },
  props: {
    projectList: {
      type: Array as () => Project[],
      required: true,
    },
  },
});
</script>
