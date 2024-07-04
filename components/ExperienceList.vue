<template>
  <ExperienceItem
    v-for="item in sortedExperience"
    :key="item.id"
    :experience="item"
  />
</template>

<script lang="ts">
import ExperienceItem from "../components/ExperienceItem.vue";
import type { Experience } from "../types/Experience";

export default {
  name: "Experience",
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
};
</script>
