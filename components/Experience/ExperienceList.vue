<template>
  <div>
    <slot :sorted-experience="sortedExperience" />
  </div>
</template>

<script lang="ts">
import type { Experience } from "../../types/Experience";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "ExperienceList",
  props: {
    experienceList: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
  computed: {
    sortedExperience() {
      return [...this.experienceList].sort(
        (a: Experience, b: Experience) =>
          new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
      );
    },
  },
});
</script>
