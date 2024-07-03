<template>
  <ExperienceItem
    v-for="item in sortedExperience"
    :key="item.id"
    :experience="item"
  />
</template>

<script>
import ExperienceItem from "../components/ExperienceItem.vue";

export default {
  name: "Experience",
  components: { ExperienceItem },
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedExperience() {
      return this.experience.sort(
        (a, b) => new Date(b.endDate) - new Date(a.endDate)
      );
    },
  },
};
</script>
