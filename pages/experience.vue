<template>
  <div>
    <PageTitle :title="title" />
    <ExperienceList :experienceList="experienceData">
      <template #default="{ sortedExperience }">
        <div v-for="item in sortedExperience" :key="item.id">
          <ExperienceItem :experienceItem="item" />
        </div>
      </template>
    </ExperienceList>
  </div>
</template>

<script lang="ts">
import { experienceData } from "../data/experience";
import ExperienceList from "../components/Experience/ExperienceList.vue";
import PageTitle from "../components/PageTitle.vue";
import ExperienceItem from "~/components/Experience/ExperienceItem.vue";

export default {
  name: "Experience",
  components: { PageTitle, ExperienceList, ExperienceItem },
  data() {
    return {
      title: "Experience",
      experienceData,
    };
  },
};
</script>
