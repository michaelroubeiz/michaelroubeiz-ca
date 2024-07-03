<template>
  <div>
    <PageTitle :title="title" />
    <ExperienceList :experience="experience" />
  </div>
</template>

<script>
import { experience } from "../data/experience.ts";
import ExperienceList from "../components/ExperienceList.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Experience",
  components: { PageTitle, ExperienceList },
  data() {
    return {
      title: "Experience",
      experience,
    };
  },
};
</script>
