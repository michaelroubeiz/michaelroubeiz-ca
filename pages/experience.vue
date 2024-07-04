<template>
  <div>
    <PageTitle>{{ title }}</PageTitle>
    <ExperienceList :experienceData="experienceData">
      <template #default="{ sortedExperience }">
        <div v-for="item in sortedExperience" :key="item.id">
          <ExperienceItem :experience="item" />
        </div>
      </template>
    </ExperienceList>
  </div>
</template>

<script lang="ts">
import { experienceData } from "../data/experience";
import ExperienceList from "../components/ExperienceList.vue";
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
