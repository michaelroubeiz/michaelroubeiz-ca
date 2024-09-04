<template>
  <div>
    <PageTitle :title="title" />
    <ExperienceList :experience-list="experienceData" />
  </div>
</template>

<script lang="ts">
import { experienceData } from "~/data/experience";
import ExperienceList from "../components/Experience/ExperienceList.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Experience",
  components: { PageTitle, ExperienceList },
  data() {
    return {
      title: "Experience",
      experienceData,
    };
  },
};
</script>
