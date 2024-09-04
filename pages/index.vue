<template>
  <div>
    <PageTitle :title="title" />
    <DeveloperTitles :titles="developerTitles" />
    <div class="mt-4 text-2xl font-open-sans leading-9 space-y-2">
      <p>Software Engineering graduate from Concordia University.</p>
      <p>I am currently based in Montréal, QC, Canada.</p>
    </div>
    <SocialIcons />
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";
import DeveloperTitles from "../components/DeveloperTitles.vue";
import SocialIcons from "../components/SocialIcons.vue";
import { developerTitles } from "~/data/developerTitles";

export default {
  name: "WelcomeSection",
  components: { PageTitle, DeveloperTitles, SocialIcons },
  data() {
    return {
      title: "Hey, I'm Michael Roubeiz",
      developerTitles,
    };
  },
};
</script>
