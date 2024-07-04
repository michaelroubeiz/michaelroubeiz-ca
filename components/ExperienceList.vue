<template>
  <div>
    <slot :sortedExperience="sortedExperience"></slot>
  </div>
</template>

<script lang="ts">
import ExperienceItem from "../components/ExperienceItem.vue";
import type { Experience } from "../types/Experience";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceList",
  components: { ExperienceItem },
  props: {
    experienceData: {
      type: Array as () => Experience[],
      required: true,
    },
  },
  computed: {
    sortedExperience() {
      return this.experienceData.sort(
        (a: Experience, b: Experience) =>
          new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
      );
    },
  },
});
</script>
