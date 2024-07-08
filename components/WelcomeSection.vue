<template>
  <div>
    <PageTitle :title="title" />
    <DeveloperTitles :titles="developerTitles" />
    <div class="mt-6 text-2xl font-open-sans text-white">
      Software Engineering graduate from Concordia University.<br />
      I am currently based in Montréal, QC, Canada.
    </div>
    <SocialIcons />
    <!-- TODO: Move this component and style it -->
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";
import DeveloperTitles from "../components/DeveloperTitles.vue";
import SocialIcons from "../components/SocialIcons.vue";
import { developerTitles } from "../data/developerTitles";

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
