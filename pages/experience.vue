<template>
  <!-- TODO: make title component -->
  <div>
    <div class="text-6xl font-cairo">Experience</div>
    <div name="experience-section" class="font-roboto-mono">
      <ExperienceItem
        v-for="item in experience"
        :key="item.id"
        :experience="item"
      />
    </div>
  </div>
</template>

<script>
import { experience } from "../data/experience.ts";
import ExperienceItem from "../components/ExperienceItem.vue";

export default {
  name: "Experience",
  components: { ExperienceItem },
  data() {
    return {
      experience,
    };
  },
};
</script>
